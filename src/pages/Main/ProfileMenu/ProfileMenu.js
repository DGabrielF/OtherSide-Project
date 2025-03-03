import { ProgressBar } from "../../../components/ProgressBar/ProgressBar.js";

export const ProfileMenu = {};

ProfileMenu.create = () => {
  ProfileMenu.self = document.createElement("div");
  ProfileMenu.self.id = "profile-menu";

  const personalItems = document.createElement("div");
  personalItems.classList.add("personal-items");
  ProfileMenu.self.appendChild(personalItems);
  
  const profileImage = document.createElement("img");
  profileImage.classList.add("profile-image");
  profileImage.src = "src/assets/profile-image.jpeg";
  personalItems.appendChild(profileImage);

  const profileInfo = document.createElement("div");
  profileInfo.classList.add("profile-info");
  personalItems.appendChild(profileInfo);

  const levelLabel = document.createElement("span");
  levelLabel.textContent = "Lv";
  profileInfo.appendChild(levelLabel);
  const level = document.createElement("span");
  profileInfo.appendChild(level);
  const vipLabel = document.createElement("span");
  profileInfo.appendChild(vipLabel);
  vipLabel.textContent = "Vip";
  const vip = document.createElement("span");
  profileInfo.appendChild(vip);
  
  const vitalityItems = document.createElement("div");
  vitalityItems.classList.add("vitality-items");
  ProfileMenu.self.appendChild(vitalityItems);

  const healthBarInstance = new ProgressBar({
    value: 100,
    maxValue: 100,
    showText: true,
  });
  const healthBar = healthBarInstance.create();
  healthBar.classList.add("health-bar");
  vitalityItems.appendChild(healthBar);

  const staminaBarInstance = new ProgressBar({
    value: 100,
    maxValue: 100,
    showText: true,
  });
  const staminaBar = staminaBarInstance.create();
  staminaBar.classList.add("stamina-bar");
  vitalityItems.appendChild(staminaBar);

  const manaBarInstance = new ProgressBar({
    value: 100,
    maxValue: 100,
    showText: true,
  });
  const manaBar = manaBarInstance.create();
  manaBar.classList.add("mana-bar");
  vitalityItems.appendChild(manaBar);


  const soulBarInstance = new ProgressBar({
    value: 100,
    maxValue: 100,
    showText: true,
  });
  const soulBar = soulBarInstance.create();
  soulBar.classList.add("soul-bar");
  vitalityItems.appendChild(soulBar);

  return ProfileMenu.self;
}