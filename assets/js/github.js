function publishContent(filename, content) {
  copyToClipboard(content).then(copied => {
    const message = copied ?
      'Content copied to clipboard!\n\nGitHub will open the file editor.\nPaste your content (Ctrl+V) and create a pull request.' :
      'GitHub will open the file editor.\n\nManually copy and paste your content to create a pull request.';

    if (confirm(message + '\n\nYou need to be signed in to GitHub.\n\nContinue?')) {
      const editUrl = `https://github.com/djcooke/compendium/edit/main/${filename}`;
      window.open(editUrl, '_blank');
    }
  });
}

function getFilenameFromPath(urlPath) {
  if (urlPath === '/' || urlPath === '/index.html') return 'pages/index.md';
  if (urlPath.endsWith('.html')) return 'pages/' + urlPath.replace('.html', '.md').replace(/^\//, '');
  return 'pages/' + urlPath.replace(/^\//, '') + '.md';
}

async function copyToClipboard(content) {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(content);
      return true;
    } catch (err) {
      return false;
    }
  }
  return false;
}
