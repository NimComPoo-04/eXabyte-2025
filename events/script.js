// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topSection = document.querySelector(".top-section");
let sponsorSection = this.document.querySelector(".events-items");
let initialTopPaddingForMsg = "10px";

const resetPositions = () => {
  header.style.transition = "0.1s font-size, 0.3s padding, top 0.3s linear";
  header.style.fontSize = "2.5rem";
  header.style.position = "sticky";
  header.style.paddingLeft = "40px";
  msg.style.opacity = "1";
  msg.style.paddingTop = initialTopPaddingForMsg;
  topSection.style.height = "45%";
  topSection.style.minHeight = "300px";
  sponsorSection.style.paddingTop = "70px";
  header.classList.remove("transparent-glass-bg-top");
};

document.querySelector(".mobile").addEventListener("scroll", function () {
  let msgPositionFromTop = msg.getBoundingClientRect().top;
  // console.log(msgPositionFromTop);
  if (msg.style.paddingTop == "65px") {
    if (msgPositionFromTop > 50) {
      resetPositions();
    }
  }
  if (msgPositionFromTop < 110) {
    header.style.paddingLeft = "90px";
    header.style.transition =
      "0.1s font-size, 0.025s padding, top 0.3s linear, 0.3s box-shadow";
    if (msgPositionFromTop < 85) {
      header.style.fontSize = "1.8rem";
      msg.style.transition = "none";
    }
    if (msgPositionFromTop < 55) {
      header.classList.add("transparent-glass-bg-top");
    }
    if (msgPositionFromTop <= 0) {
      msg.style.paddingTop = "65px";
      header.style.position = "fixed";
    }
  } else {
    resetPositions();
  }
  setTimeout(() => {
    let msgPositionFromTop = msg.getBoundingClientRect().top;
    //console.log(msgPositionFromTop);
    if (msgPositionFromTop > 110) {
      resetPositions();
    }
  }, 100);
});

const eventDetails = [
  {
    name: "CodePlay",
    description:
	    "Where tech enthusiasts unite, showcasing innovation through coding, workshops, and networking.",
    modalDescription:
      "Welcome to CODEPLAY, where the world of coding transforms into an exhilarating game! Dive into the challenge, whether you`re a seasoned coder or a beginner. Solve puzzles, crack codes, and unravel the magic of programming in this thrilling event!<br><br> <b>Participation Type:</b> Team Event (2 members)<br><br> <b>Event Details:</b> <ul> <li>A competitive coding event focusing on common topics from Data Structures and Algorithms (DSA).</li> <li><b>Question Difficulty:</b> Easy to Hard.</li> <li><b>Allowed Programming Languages:</b> C,C++ & Java.</li> </ul>",
    fromLink: "https://docs.google.com/forms/d/e/1FAIpQLScViV3hGIBmtpnGPl0UoiHktQqffoTV_rO4xAVR2SuYMGHjAg/viewform?usp=sharing",
    icon: "data_object"
  },
  {
    name: "Webbed",
    description:
      "Unleash creativity & elevate your coding skills at this immersive web development event.",
    modalDescription:
      "Get ready to weave the digital canvas with WEBBED! This solo event challenges participants to craft a stunning stand-alone webpage using HTML, CSS, and vanilla JavaScript. Unleash your creativity with the same set of images provided to all, bringing your design to life!<br><br> <b>Participation Type:</b> Individual Event<br><br> <b>Event Details:</b> <ul> <li>A web designing competition focusing on frontend design.</li> <li>Adding dynamic features is encouraged but not mandatory.</li> <li>All required resources (images, audio files) will be provided on the event day.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe6RFHRJf0NeInST61i9FiHNI5aimSv9FWXtL-JfdFH3MZQbg/viewform?usp=sharing",
    icon: "language",
  },
  {
    name: "eXathon",
    description:
      "Code, collaborate, and innovate in a dynamic hybrid hackathon experience",
    modalDescription:
      "Immerse yourself in a world of innovation and collaboration, where you can tackle real-world challenges, showcase your skills, and transform groundbreaking ideas into reality. This is your chance to push boundaries and make an impact!<br><br> <b>Participation Type:</b> Team Event (3 members)<br><br> <b>Event Details:</b><br><br> <b>Phase 1 (On-line):</b> <ul> <li>Teams submit an idea based on provided topics.</li> <li>Develop the core model and upload it to a specified GitHub link.</li> <li>Create a 5-slide PowerPoint presentation to describe the idea and present it in a Google Meet session.</li> <li>Plagiarism is strictly prohibited.</li> <li>Time allocation details for model development will be shared before the event.</li> <li>Winners from the Phase 1 will qualify for Phase 2.</li> </ul> <b>Phase 2 (On-Campus):</b> <ul> <li>Qualifying teams will visit the college.</li> <li>Additional requirements will be shared and must be incorporated into the model.</li> <li>Teams will receive expert feedback after Round 1 to improve their models.</li> <li>Final presentations will be made before a panel of judges.</li> <li>The judging panel’s decision will determine the winners.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe7xbYC6kpA8ZOY56Ytv64_coQEPrKDsOf6k1usfma42TQTSQ/viewform?usp=sharing",
    icon: "monitor",
  },
  {
    name: "Brainstorm",
    description:
      "Ignite your intellect in a thrilling quiz challenge, testing knowledge and quick thinking.",
    modalDescription:
      "Ignite your intellect in a thrilling quiz challenge, testing knowledge and quick thinking.<br><br> <b>Participation Type:</b> Team Event (2 members)<br><br> <b>Event Details:</b> <ul> <li>A generalized quiz covering technical topics.</li> <li>The format and rules will be announced by the Quiz Master during the event.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSetsdAgec6SJ3divQeywVmnKm8Fkgdj5TEhNQNFBdUpsjBS5w/viewform?usp=sharing",
    icon: "psychology_alt",
  },
  {
    name: "Verb-O-War",
    description:
      "Engage in thought-provoking debates, where ideas clash and minds spark intellectual fireworks.",
    modalDescription:
      "Step into the arena of ideas with VERB-O-WAR! In this dynamic debate, teams of two engage in thought-provoking battles, with one participant advocating and the other opposing. From challenging prelims to the intense finals, it`s a clash of intellects in the Oxford style!<br><br> <b>Participation Type:</b> Team Event (2 members)<br><br> <b>Event Details:</b> <ul> <li><b>Format:</b> Oxford-style debate.</li> <li><b>Roles:</b> One member will speak for the motion, and the other against it.</li> <li><b>Topic Announcement:</b> Provided one day prior to the event.</li> <li><b>Time Limit:</b> Each speaker gets 2+1 minutes, followed by a 1-minute rebuttal.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSernONm6mXl3M-mGFT9HNsGacDq7vLlxqAjdxLZZp6Fs1FpHw/viewform?usp=sharing",
    icon: "campaign",
  },
  {
    name: "X-Hunt",
    description:
      "Embark on a thrilling clue hunt, decode mysteries, and unravel the enigma.",
    modalDescription:
      "Embark on an adventurous journey with X-HUNT! In this clue hunting extravaganza, participants decode mysteries and solve puzzles. The treasure hunt unfolds, promoting teamwork and quick thinking, leading to exciting group-fies at every clue location.<br><br> <b>Participation Type:</b> Team Event (4 members)<br><br> <b>Event Details:</b> <ul> <li>A treasure hunt requiring teamwork to solve clues.</li> <li>Each team must have 4 members with at least one member being from St. Xavier’s College (Autonomous), Kolkata.</li> <li>Teams must stay together and use smartphones with active internet and WhatsApp.</li> <li>Each team will be given a clue at the beginning of the treasure hunt from the registration desk. It will be up to the teams to decipher the said clue.</li> <li>Solve each clue to reach a location, take a group-fie with the clue, and proceed.</li> <li>Scoring is based on task completion and time taken.</li> <li>Teams must return to the starting point to be complete their participation.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeJWijFoNEl9OM_9qOPI8AUaRKf21ydm9KZ70P1UcmJVAXPVA/viewform?usp=sharing",
    icon: "map",
  },
  {
    name: "eXcelerate",
    description:
      "Dive into the adrenaline-fueled world of esports, where skills clash and champions emerge.",
    modalDescription:
      "Dive into the competitive world of EXCELERATE! In this solo efootball mobile tournament, players face off in 1v1 matches, showcasing their skills and strategy. With standard match settings and intense gameplay, only the best will emerge victorious!<br><br> <b>Participation Type: </b> Team Event (4 members)<br><br><b>Event Details:</b> <ul> <li><b>The Game allowed: </b> Call of Duty mobile.</li> <li><b>Prelims:</b> Conducted on Day 1.</li> <li><b>Finals:</b> Teams that qualify will compete on the final day.</li> <li>Teams must have a reliable internet connection for mobile gaming.</li> <li>Verbal abuse will result in disqualification.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdZgTziC9bMtnH99lg0Df15ZDSlUQOjpTMnf7uDls5hFPONhA/viewform?usp=sharing",
    icon: "sports_esports",
  },
  {
    name: "Digitbit",
    description:
      "Unleash creativity in hardware design challenges, where circuits come to life with innovation.",
    modalDescription:
      "Embark on the journey of DIGIBIT, where hardware circuit designing meets innovation! Teams of two dive into the realms of circuitry, solving challenges from multiple-choice prelims to hands-on finals. Efficiency and speed are the key as you bring circuit diagrams to life with provided materials.<br><br> <b>Participation Type:</b> Team Event (2 members)<br><br> <b>Event Details:</b><br><br> <b>Phase 1:</b> <ul> <li>Write assembly code for a given problem statement within the allotted time.</li> <li>Scoring is based on the optimization of the program.</li> </ul> <b>Phase 2:</b> <ul> <li>Design a circuit diagram based on the provided requirements.</li> <li>Materials will be provided.</li> <li>Scoring is based on efficiency and time taken to complete the circuit.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSevhEJeFOP8cbDq8TTEdNp0CKfnv680LRNRVMOj2DYQqt9B1Q/viewform?usp=sharing",
    icon: "electrical_services",
  },
  {
    name: "Em-Bleed",
    description:
      "Transform imagination into pixels at this digital art and design event, sparking creative brilliance.",
    modalDescription:
      "Unleash your creativity in EM-BLEED, where design meets expression! This solo event invites participants to craft captivating posters, digital artworks, or GIFs on a given topic. Let your imagination flow freely, adhering to guidelines that foster creativity and respect.<br><br>  <b>Participation Type:</b> Individual Event<br><br> <b>Event Details:</b> <ul> <li>Design a poster, digital artwork, or GIF on a given topic.</li> <li>Designs must not represent individuals, organizations, or brands, and must avoid religious sentiments.</li> <li>Plagiarism is prohibited.</li> <li>Tools: Adobe Photoshop or Adobe Illustrator.</li> <li>Submission Format: JPEG.</li> <li>Platform: macOS.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzio3xbH4H0fJWvdL6duY7sj2chD1PaU4-JxWzHFrDjuX9ng/viewform?usp=sharing",
    icon: "palette",
  },
	/*
  {
    name: "Cube-X",
    description:
      "Twist, turn, and conquer the challenge in this Rubik's Cube-solving showdown.",
    modalDescription:
      "Get ready for the Rubik`s Cube Challenge! Navigate through mind-bending twists, speed-solving against the clock. Bring your own cube, and let the colors whirl in a solo showdown of skill and speed!<br><br> <b>Participation Type:</b> Individual Event<br><br> <b>Event Details:</b> <ul> <li>A Rubik’s Cube challenge.</li> <li>Time limit: 2 minutes per solve.</li> <li>Participants must bring their own Rubik’s cube.</li> <li>Timing will be recorded using mobile stopwatches.</li> </ul>",
    formLink: "#",
    icon: "deployed_code",
  },
  */
  {
    name: "Byte Tales",
    description:
      "Sculpt powerful narratives in tiny spaces, where words spark worlds in microfiction mastery",
    modalDescription:
      "Dive into the world of micro storytelling with BYTE TALES! Unleash your creativity in bite-sized paragraphs, each a narrative gem. Explore diverse themes and craft compelling tales within the tight embrace of a 50-word limit.<br><br> <b>Participation Type:</b> Individual Event<br><br> <b>Event Details:</b> <ul> <li><b>Format:</b> On-line event.</li> <li><b>Task:</b> Write a short paragraph (50 words) on a given theme.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf1VM_EJ69Be9_y4vT425SaiXERRL2Zt_yqseSei6FVXBJ68g/viewform?usp=sharing",
    icon: "auto_stories",
  },
  {
    name: "Crypt-X",
    description:
      "Dive into the cryptic challenge, solve puzzles & crack encrypted messages.",
    modalDescription:
      "Unlock the secrets of encryption in CRYPT-X! Dive into the world of cipher codes, where participants embark on a quest to break through cryptographic puzzles. Whether you`re a novice or an encryption expert, CRYPT-X promises an exciting challenge for all!<br><br> <b>Participation Type:</b> Individual  Event<br><br> <b>Event Details:</b><br> <ul> <li>A set of n questions will be given in password-protected .txt files.</li> <li>The first question will be accessible to every participant.</li> <li>The answer to each question serves as the password for the next file.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScCgoTr0Lz0cnQGeHI8NJ2_DtOn-DKLt8DK7CNFt0-nbBRE5g/viewform?usp=sharing",
    icon: "key",
  },
  {
    name: "Snappit",
    description:
      "Capture the essence of moments, express creativity through lenses in this captivating photography event.",
    modalDescription:
      "Join Snappit, a celebration of smartphone photography! In this solo event, capture moments that speak volumes. Unleash your creativity with specific editing techniques while ensuring originality, fairness, and adherence to ethical standards.<br><br><b>Participation Type:</b> Individual Event<br><br> <b>Event Details:</b> <ul> <li>Submit a single smartphone-captured image on a given theme.</li> <li>DSLR/Digital Camera photography is not allowed.</li> <li>Original images with geotagging feature enabled is required.</li> <li>Basic editing (cropping, color correction) is allowed.</li> <li>Heavy manipulations altering the reality of the image are not acceptable.</li> <li>Plagiarism, inappropriate content, and violation of rules lead to disqualification.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSegHklrHq7XHNgfOADA1JgJDu2X5R4IuxZK5yLE2rDtuN7b0Q/viewform?usp=sharing",
    icon: "photo_camera",
  },
  {
    name: "Sudo-X",
    description:
      "Tackle number puzzles, sharpen your mind, and conquer Sudoku mastery in this event.",
    modalDescription:
      "Immerse yourself in the world of Sudo-X, where Sudoku enthusiasts embark on a thrilling challenge. With 4 Sudoku problems to solve, speed and precision are key. Be the fastest to conquer them all and claim victory in this solo puzzle-solving journey!<br><br> <b>Participation Type:</b> Individual Event<br><br> <b>Event Details:</b> <ul> <li>Each participant will be given 4 Sudoku problems to solve. Only when the participant solves one problem, can he/she proceed to the next problem.</li> <li>The fastest to solve all the problems will be adjudged the winner.</li> <li>In case of a tie, winners will be determined based on the final arrangements closest to the actual solution.</li> </ul>",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeLOImEmE9l5nGz6n2Egz3KSGoDgMD-KqtWO5PVJtuWgLaxFg/viewform?usp=sharing",
    icon: "grid_on",
  },
];

let eventSection = document.querySelector(".events-items");
let eventSectionDesktop = document.querySelector(".event-items-desktop");

eventDetails.forEach((event, index) => {
  let newEventDivDesktop = document.createElement("div");
  newEventDivDesktop.className = "event-card flex relative mt-1rem p-1rem flex flex-col justify-between items-start gap-1rem h-15rem rounded w-85p";
  newEventDivDesktop.innerHTML = `
  <div class="flex justify-between w-full items-center gap-1rem p-025rem">
    <div class="display text-xl z-5">${event.name}</div>
    <span class="material-symbols-outlined text-xl"> ${event.icon} </span>
  </div>
  <div class="z-5 text-base">
        ${event.description}
  </div>
  <div class="flex z-5 event-button-group w-full gap-05rem">
    <button class="register-button" onclick="openModal('${event.name}','${event.modalDescription}','${event.formLink}')">View Details</button>
  </div>
      `;
  eventSectionDesktop.appendChild(newEventDivDesktop);
  let newEventDiv = document.createElement("div");
  newEventDiv.className = "event-card flex relative mt-1rem p-1rem flex flex-col justify-between items-start gap-1rem h-15rem rounded w-85p";
  newEventDiv.innerHTML = `
  <div class="flex justify-between w-full items-center gap-1rem p-025rem">
    <div class="display text-xl z-5">${event.name}</div>
    <span class="material-symbols-outlined text-xl"> ${event.icon} </span>
  </div>
  <div class="z-5 text-base">
        ${event.description}
  </div>
  <div class="flex z-5 event-button-group w-full gap-05rem">
    <button class="register-button" onclick="openModal('${event.name}','${event.modalDescription}','${event.formLink}')">View Details</button>
  </div>
      `;
  eventSection.appendChild(newEventDiv);
})
