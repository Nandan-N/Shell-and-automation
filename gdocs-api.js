function fetchGitHubMarkdown() {
  // Replace with your GitHub repository details
  const githubUsername = 'Nandan-N';
  const githubRepo = 'Pestles';
  const githubBranch = 'main'; // Replace with the branch containing your Markdown file
  const markdownFilePath = 'https://raw.githubusercontent.com/Nandan-N/Pestles/main/README.md'; // Replace with the path to your Markdown file in the repository

  // Fetch the raw content of the Markdown file from GitHub
  const rawFileUrl = `https://raw.githubusercontent.com/Nandan-N/Pestles/main/README.md`;
  const markdownContent = UrlFetchApp.fetch(rawFileUrl).getContentText();

  // Replace with your Google Doc ID
  const googleDocId = '1kMIUJq4nHCw7Kc52_acFYXGZnfGfd87SmV9uZmMvByM';
  const googleDoc = DocumentApp.openById(googleDocId);

  // Append the fetched Markdown content to the Google Doc
  googleDoc.getBody().appendParagraph(markdownContent);
}
