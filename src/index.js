//global code
const content = document.querySelector(".content");
const homePageBtn = document.querySelector(".home");
const popPageBtn = document.querySelector(".stock");
const contactBtn = document.querySelector(".contact");
function homePage() {
  content.innerHTML = "";
  //home page stuff
  const homePageTitle = document.createElement("div");
  const homePageInfo = document.createElement("div");
  const homePageHours = document.createElement("div");
  const homePageLocation = document.createElement("div");

  //home page classes
  homePageTitle.classList.add("home-title");
  homePageInfo.classList.add("home-info");
  homePageHours.classList.add("home-hours");
  homePageLocation.classList.add("home-location");

  //home page text content
  homePageTitle.textContent = "Phil's fantastic Funkos";
  homePageInfo.textContent =
    "common to chases, all funkos are in mint condition, all in boxes";
  homePageHours.textContent =
    "Sunday: 8am - 8pm Monday: 6am - 6pm Tuesday: 6am - 6pm Wednesday: 6am - 6pm Thursday: 6am - 10pm Friday: 6am - 10pm Saturday: 8am - 10pm";
  homePageLocation.textContent =
    "pickup at hyperdome or deliver to nearby neighbourhoods for small fee";

  //home page where stuff goes
  content.appendChild(homePageTitle);
  content.appendChild(homePageInfo);
  content.appendChild(homePageHours);
  content.appendChild(homePageLocation);
}

function stockPage() {
  content.innerHTML = "";
  //stock page stuff
  const stockPageTitle = document.createElement("div");
  const stockPageInfo = document.createElement("div");

  //stock page classes
  stockPageTitle.classList.add("stock-title");
  stockPageInfo.classList.add("stock-info");

  //stock page text content
  stockPageTitle.textContent = "Pop Vinyls";
  stockPageInfo.textContent = "demonslayer Pop $$$";

  //stock page where stuff goes
  content.appendChild(stockPageTitle);
  content.appendChild(stockPageInfo);
}
function contactPage() {
  content.innerHTML = "";
  //contact page stuff
  const contactTitle = document.createElement("div");
  const contactInfo = document.createElement("div");

  //contact page classes
  contactTitle.classList.add("contact-title");
  contactInfo.classList.add("contact-info");

  //contact page text content
  contactTitle.textContent = "contact us";
  contactInfo.textContent =
    "philip tran, seller, 0420471686, this is my email.com";

  //contact page where stuff goes
  content.appendChild(contactTitle);
  content.appendChild(contactInfo);
}
homePageBtn.addEventListener("click", () => {
  homePage();
});
popPageBtn.addEventListener("click", () => {
  stockPage();
});

contactBtn.addEventListener("click", () => {
  contactPage();
});
