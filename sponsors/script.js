// REMEMBER TO REMOVE GREYSCALE ON IMAGES
const sponsorDetails = [
  {
    groupName: "Title Sponsor ",
    sponsorsArray: [
      {
	      name: "Aliff Overseas",
        sponsorType: "<em style='font-size: 1.25em'>We bring study abroad within the common man's reach</em>",
	link:"https://aliff.in/",
        imageSrc: "/assets/images/sponsor-logos/aliff.png",
      },
    ],
  },
  {
    groupName: "Digital Media Partner",
    sponsorsArray: [
      {
        name: "The Telegraph online edugraph",
        sponsorType: "",
	link:"https://www.telegraphindia.com/edugraph",
        imageSrc: "/assets/images/sponsor-logos/telegraph.png",
      },
    ],
  },
  {
    groupName: "Partner",
    sponsorsArray: [
      {
        name: "Studies In Overseas",
        sponsorType: "",
	link:"https://studiesinoverseas.com/",
        imageSrc: "/assets/images/sponsor-logos/SIO.svg",
      },
    ],
  },
  {
    groupName: "Cyber-security Training Partner",
    sponsorsArray: [
      {
        name: "Indian School Of Ethical Hacking",
        sponsorType: "",
	link:"https://www.isoeh.com/",
        imageSrc: "/assets/images/sponsor-logos/ISOEH.png",
      },
    ],
  },
  {
    groupName: "Exclusive Radio Partner",
    sponsorsArray: [
      {
        name: "91.9 Friends FM",
        sponsorType: "",
	link:"https://www.instagram.com/919friendsfm?igsh=NWduMHlpOGNpNm13",
        imageSrc: "/assets/images/sponsor-logos/friendsfm.png",
      },
    ],
  }
];


// Code scrolling effects of the page header:
let header = document.querySelector("#page-header");
let msg = document.querySelector("#page-msg");
let topSection = document.querySelector(".top-section");
let sponsorSection = this.document.querySelector(".sponsor-items");
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
  console.log(msgPositionFromTop);
  if (msg.style.paddingTop == "65px") {
    if (msgPositionFromTop > 50) {
      resetPositions();
    }
  }
  if (msgPositionFromTop < 110) {
    header.style.paddingLeft = "90px";
    header.style.transition =
      "0.1s font-size, 0.1s padding, top 0.3s linear, 0.3s box-shadow";
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
    console.log(msgPositionFromTop);
    if (msgPositionFromTop > 110) {
      resetPositions();
    }
  }, 100);
});

const topSponsorsDivDesktop = document.querySelector(".top-sponsors-desktop");
// const topSponsorsDivMobile = document.querySelector(".top-sponsors-mobile");
const otherSponsorsDivDesktop = document.querySelector(
  ".other-sponsors-desktop"
);
const otherSponsorsDivMobile = document.querySelector(".other-sponsors-mobile");

// const topSponsors = sponsorDetails[0];
// topSponsors.sponsorsArray.forEach((item) => {
//   const newTopSponsorsDiv = document.createElement("div");
//   newTopSponsorsDiv.className = "sponsor-card";
//   newTopSponsorsDiv.innerHTML = `
//           <div class="brand-logo-desktop"><img class="brand-img height-100 width-100" src="${item.imageSrc}" alt=""/></div>
//           <div class="brand-name-desktop text-center">${item.name}</div>
//           <div class="sponsor-title-desktop text-center">${item.sponsorType}</div>
//     `;
//   topSponsorsDivDesktop.appendChild(newTopSponsorsDiv);
// });

// FIXME(NimComPoo): Do not remove top sponsor for now please
// const otherSponsors = sponsorDetails.slice(1);
const otherSponsors = sponsorDetails;
otherSponsors.forEach((item, indx) => {
	const dw = (indx == 0 ? 100: 0);
  let newSponsorGroupDesktopHTML = `
            <header class="pixelated">${item.groupName}</header>
            <div class="broadband-partner partners-desktop flex flex-wrap justify-center">
            `;
  let newSponsorGroupMobileHTML = `
        <header class="pixelated">${item.groupName}</header>
        <div class="food-partner partners flex flex-wrap justify-center">
    `;
  item.sponsorsArray.forEach((sponsor, indx) => {
    let newSponsorDesktopHTML = `
            <div class="sponsor-card flex-col">
              <div class="brand-logo-desktop">
                ${sponsor.link ? `<a href="${sponsor.link}" target="_blank">` : ""}<img class="brand-img" width="${230+dw}px" src="${sponsor.imageSrc}" alt=""/>${sponsor.link ? "</a>" : ""}</div>
              <div class="brand-name-desktop text-center">${sponsor.name}</div>
              <div class="sponsor-title-desktop text-center">${sponsor.sponsorType}</div>
            </div>
        `;
    let newSponsorMobileHTML = `
        <div class="sponsor-card flex-col">
            <div class="brand-logo">
              ${sponsor.link ? `<a href="${sponsor.link}" target="_blank">` : ""}<img class="brand-img" width="${300+dw}px" height="${200+dw}px" src="${sponsor.imageSrc}" alt=""/>${sponsor.link ? "</a>" : ""}
            </div>
            <div class="brand-name text-center">${sponsor.name}</div>
            <div class="sponsor-title text-center">${sponsor.sponsorType}</div>
          </div>`;
    newSponsorGroupDesktopHTML += newSponsorDesktopHTML;
    newSponsorGroupMobileHTML += newSponsorMobileHTML;
  });
  newSponsorGroupDesktopHTML = `
    ${newSponsorGroupDesktopHTML}
    </div>
    `;
  newSponsorGroupMobileHTML = `
    ${newSponsorGroupMobileHTML}
    </div>
    `;
  otherSponsorsDivDesktop.innerHTML += newSponsorGroupDesktopHTML;
  otherSponsorsDivMobile.innerHTML += newSponsorGroupMobileHTML;
});
