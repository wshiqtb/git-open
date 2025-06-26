import simpleGit from 'simple-git';
import open from 'open';
import { program } from 'commander';
import process from 'node:process';


async function getRemoteUrl(git) {
  const remotes = await git.getRemotes(true);
  const origin = remotes.find(r => r.name === 'origin') || remotes[0];
  if (!origin) throw new Error('No git remote found.');
  return origin.refs.fetch || origin.refs.push;
}

function parseRemoteUrl(url) {
  // Support SSH and HTTPS
  // git@github.com:user/repo.git or https://github.com/user/repo.git
  let match;
  if ((match = url.match(/^git@([^:]+):(.+?)(\.git)?$/))) {
    return { host: match[1], repo: match[2].replace(/\.git$/, '') };
  } else if ((match = url.match(/^https?:\/\/([^/]+)\/(.+?)(\.git)?$/))) {
    return { host: match[1], repo: match[2].replace(/\.git$/, '') };
  }
  throw new Error('Unsupported remote url: ' + url);
}

function getPlatformWebUrl({ host, repo }, type, ref) {
  // type: branch|tag|commit
  // ref: name or hash
  return `https://${host}/${repo}/tree/${ref}`;
  // if (/github\.com$/.test(host)) {
  //   if (type === 'branch') return `https://${host}/${repo}/tree/${ref}`;
  //   if (type === 'tag') return `https://${host}/${repo}/releases/tag/${ref}`;
  //   if (type === 'commit') return `https://${host}/${repo}/commit/${ref}`;
  //   return `https://${host}/${repo}`;
  // } else if (/gitlab\.com$/.test(host)) {
  //   if (type === 'branch') return `https://${host}/${repo}/-/tree/${ref}`;
  //   if (type === 'tag') return `https://${host}/${repo}/-/tags/${ref}`;
  //   if (type === 'commit') return `https://${host}/${repo}/-/commit/${ref}`;
  //   return `https://${host}/${repo}`;
  // } else if (/gitee\.com$/.test(host)) {
  //   if (type === 'branch') return `https://${host}/${repo}/tree/${ref}`;
  //   if (type === 'tag') return `https://${host}/${repo}/releases/tag/${ref}`;
  //   if (type === 'commit') return `https://${host}/${repo}/commit/${ref}`;
  //   return `https://${host}/${repo}`;
  // }
  // throw new Error('Unsupported git host: ' + host);
}

async function getCurrentRef(git) {
  const status = await git.status();
  if (status.current) {
    return { type: 'branch', ref: status.current };
  }
  // detached HEAD: check if tag
  const headHash = (await git.revparse(['HEAD'])).trim();
  const tags = await git.tags();
  const tag = tags.all.find(async t => {
    const tagHash = (await git.revparse([t])).trim();
    return tagHash === headHash;
  });
  if (tag) return { type: 'tag', ref: tag };
  return { type: 'commit', ref: headHash };
}

async function main() {
  program
    .name('git-open')
    .description('Open the current git repo remote page in your browser, at the current branch/tag/commit.')
    .version('1.0.0');
  program.parse(process.argv);

  const cwd = process.cwd();
  const git = simpleGit(cwd);
  let isRepo = false;
  try {
    isRepo = await git.checkIsRepo();
  } catch (e) {}
  if (!isRepo) {
    console.error('Not a git repository.');
    process.exit(1);
  }
  let remoteUrl;
  try {
    remoteUrl = await getRemoteUrl(git);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  let remoteInfo;
  try {
    remoteInfo = parseRemoteUrl(remoteUrl);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  let refInfo;
  try {
    refInfo = await getCurrentRef(git);
  } catch (e) {
    console.error('Failed to get current ref:', e.message);
    process.exit(1);
  }
  let url;
  try {
    url = getPlatformWebUrl(remoteInfo, refInfo.type, refInfo.ref);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  await open(url);
}

export default main;
