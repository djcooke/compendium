let originalContent = '';
let isEditMode = false;
let hasUnsavedChanges = false;

function initializeEditor() {
  const contentDiv = document.getElementById('page-content');
  const editControls = document.getElementById('edit-controls');

  if (!contentDiv || !editControls) return;

  // Store original content for cancel functionality
  originalContent = contentDiv.innerHTML;

  editControls.style.display = isEditablePage() ? 'block' : 'none';
}
document.addEventListener('DOMContentLoaded', initializeEditor);

function isEditablePage() {
  const editablePages = [
    '/', '/index.html', '/index',
    '/resources.html', '/resources',
    '/knowledge.html', '/knowledge',
    '/preparation.html', '/preparation',
    '/tips.html', '/tips',
    '/analysis.html', '/analysis',
    '/changelog.html', '/changelog',
    '/contributing.html', '/contributing',
    '/wall_traps.html', '/wall_traps',
    '/pomanders.html', '/pomanders'
  ];

  const currentPath = window.location.pathname;
  return editablePages.includes(currentPath) ||
    editablePages.some(path => currentPath.endsWith(path));
}

function enterEditMode() {
  if (isEditMode) return;

  isEditMode = true;

  // Toggle UI elements
  document.getElementById('edit-btn').style.display = 'none';
  document.getElementById('publish-btn').style.display = 'none';
  document.getElementById('edit-actions').style.display = 'block';
  document.getElementById('page-content').style.display = 'none';
  document.getElementById('edit-mode').style.display = 'block';

  // Populate editor with simplified markdown
  const editor = document.getElementById('content-editor');
  editor.value = htmlToMarkdown(document.getElementById('page-content').innerHTML);
  editor.focus();
}

function htmlToMarkdown(html) {
  return html
    // Headers
    .replace(/<h([1-6])[^>]*>(.*?)<\/h\1>/gi, (_match, level, text) => '#'.repeat(level) + ' ' + text + '\n\n')
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    // Bold/italic
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    // Lists
    .replace(/<ul[^>]*>/gi, '').replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '').replace(/<\/ol>/gi, '\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '* $1\n')
    // Paragraphs
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
    // Preserve Jekyll divs
    .replace(/<div class="surfacePane"[^>]*>/gi, '<div class="surfacePane" markdown="1">\n\n')
    .replace(/<div class="surfacePane spaceTop"[^>]*>/gi, '<div class="surfacePane spaceTop" markdown="1">\n\n')
    .replace(/<\/div>/gi, '\n</div>\n\n')
    // Clean whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
}

function saveChanges() {
  const newContent = document.getElementById('content-editor').value.trim();

  if (!newContent) {
    alert('Content cannot be empty!');
    return;
  }

  document.getElementById('page-content').innerHTML = markdownToHtml(newContent);

  hasUnsavedChanges = true;
  exitEditMode();

  // Show publish after new changes
  document.getElementById('publish-btn').style.display = 'inline-block';
}

function markdownToHtml(markdown) {
  return markdown
    // Headers
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Bold/italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Lists
    .replace(/^\* (.*)$/gim, '<li>$1</li>')
    // Convert to paragraphs
    .split('\n\n')
    .map(block => {
      block = block.trim();
      if (!block) return '';
      if (block.startsWith('<')) return block; // Already HTML
      if (block.includes('<li>')) return '<ul>\n' + block + '\n</ul>';
      return '<p>' + block.replace(/\n/g, '<br>') + '</p>';
    })
    .join('\n\n');
}

function publishChanges() {
  if (!hasUnsavedChanges) {
    alert('No changes to publish!');
    return;
  }

  const filename = getFilenameFromPath(window.location.pathname);
  const content = htmlToMarkdown(document.getElementById('page-content').innerHTML);

  publishContent(filename, content);

  // Reset state since user has initiated publish
  hasUnsavedChanges = false;
  document.getElementById('publish-btn').style.display = 'none';
}

function cancelEdit() {
  if (confirm('Discard changes and exit edit mode?')) {
    document.getElementById('page-content').innerHTML = originalContent;
    exitEditMode();
  }
}

function exitEditMode() {
  isEditMode = false;

  // Toggle UI elements back
  document.getElementById('edit-btn').style.display = 'inline-block';
  document.getElementById('edit-actions').style.display = 'none';
  document.getElementById('page-content').style.display = 'block';
  document.getElementById('edit-mode').style.display = 'none';

  // Show publish button only if there are unsaved changes
  if (hasUnsavedChanges) {
    document.getElementById('publish-btn').style.display = 'inline-block';
  }
}



