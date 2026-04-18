(function () {
	const siteConfig = {
		buildLabel: "Beta Launch Prep",
		githubRepoUrl: "https://github.com/cufiol/Bureau-Digital-Environment-",
		downloadUrl: "https://github.com/cufiol/Bureau-Digital-Environment-/releases",
		accountStatusNote: "Static site mode is active. Account syncing and public level uploads can come back later when the paid backend is ready."
	};

	const refs = {
		buildLabel: document.getElementById("build-label"),
		launchNote: document.getElementById("launch-note"),
		downloadButton: document.getElementById("download-button"),
		repoButton: document.getElementById("repo-button"),
		copyChecklistButton: document.getElementById("copy-checklist-button"),
		copyStatus: document.getElementById("copy-status")
	};

	const checklistText = [
		"Bureau Digital Environment free website launch checklist",
		"",
		"1. Upload the contents of this static site folder to the root of your public GitHub repo.",
		"2. Make sure index.html, styles.css, and app.js are in the repo root.",
		"3. In GitHub, open Settings > Pages.",
		"4. Set Source to Deploy from a branch.",
		"5. Choose main branch and /(root), then save.",
		"6. Wait for GitHub Pages to publish the site.",
		"7. Put your beta build on GitHub Releases and keep the download button pointed there.",
		"8. If you want the full account portal later, host the Python backend separately."
	].join("\n");

	function applyConfig() {
		document.title = "Bureau Digital Environment";
		refs.buildLabel.textContent = siteConfig.buildLabel;
		refs.launchNote.textContent = siteConfig.accountStatusNote;
		refs.repoButton.href = siteConfig.githubRepoUrl;
		refs.downloadButton.href = siteConfig.downloadUrl;
	}

	async function copyChecklist() {
		try {
			await navigator.clipboard.writeText(checklistText);
			refs.copyStatus.textContent = "Checklist copied. Paste it anywhere you want.";
		} catch (error) {
			refs.copyStatus.textContent = "Clipboard copy failed. You can still use the setup notes from the README.";
		}
	}

	refs.copyChecklistButton.addEventListener("click", copyChecklist);
	applyConfig();
})();
