// script.ts

document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Type assertion for form elements
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLTextAreaElement;
  const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
  const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
  const usernameElement = document.getElementById('username') as HTMLInputElement;
  const resumeOutputElement = document.getElementById('resumeOutput');

  // Check if all elements are present
  if (
    nameElement &&
    emailElement &&
    phoneElement &&
    educationElement &&
    experienceElement &&
    skillsElement &&
    usernameElement &&
    resumeOutputElement
  ) {
    // Retrieve values
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const username = usernameElement.value;

    // Create a unique path for the resume using the username
    const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;

    // Create the resume output as HTML
    const resumeHTML = `
      <h2>Resume</h2>
      <p><strong>Name:</strong> <span>${name}</span></p>
      <p><strong>Email:</strong> <span>${email}</span></p>
      <p><strong>Phone Number:</strong> <span>${phone}</span></p>

      <h3>Education</h3>
      <p>${education}</p>

      <h3>Experience</h3>
      <p>${experience}</p>

      <h3>Skills</h3>
      <p>${skills}</p>

      <div id="buttonContainer">
        <button id="downloadButton">Download as PDF</button>
        <button id="shareLinkButton">Copy Shareable Link</button>
      </div>
    `;

    // Display the resume output
    resumeOutputElement.innerHTML = resumeHTML;
    resumeOutputElement.classList.remove('hidden'); // Make sure it's not hidden

    // Add event listeners for the buttons
    const downloadButton = document.getElementById('downloadButton') as HTMLButtonElement;
    const shareLinkButton = document.getElementById('shareLinkButton') as HTMLButtonElement;

    downloadButton.addEventListener('click', () => {
      window.print(); // Print the page to save as PDF
    });

    shareLinkButton.addEventListener('click', async () => {
      try {
        // Create the shareable link based on the username
        const shareableLink = `https://yourdomain.com/resumes/${username.replace(/\s+/g, '-')}_cv.html`;

        // Copy the link to the clipboard
        await navigator.clipboard.writeText(shareableLink);
        alert('Shareable link copied to clipboard: ' + shareableLink);
      } catch (error) {
        console.error('Failed to copy link:', error);
      }
    });
  }
});
