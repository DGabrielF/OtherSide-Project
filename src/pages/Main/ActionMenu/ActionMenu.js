export const ActionMenu = {
  create: () => {},
  data: {
    sets: [
      {},
      {},
      {},
      {},
    ],
    moves: [
      {},
      {},
      {},
      {},
      {},
      {},
    ],
  }
};

ActionMenu.create = () => {
  ActionMenu.self = document.createElement("div");
  ActionMenu.self.id = "action-menu";

  for (let i = 0; i < ActionMenu.data.moves.length; i++) {
    const move = ActionMenu.data.moves[i];

    const moveItem = document.createElement("div");
    moveItem.classList.add("move-item");
    moveItem.dataset.setPosition = i;
    ActionMenu.self.appendChild(moveItem);

    const icon = document.createElement("img");
    icon.src = "";
    moveItem.appendChild(icon);

    const text = document.createElement("span");
    text.textContent = "Adicionar"
    moveItem.appendChild(text)

    if (!move.name) continue;
  };


  const runButton = document.createElement("div");
  runButton.classList.add("move-item");
  runButton.dataset.setPosition = 6;
  ActionMenu.self.appendChild(runButton);

  const runIcon = document.createElement("img");
  runIcon.src = "";
  runButton.appendChild(runIcon);

  const runText = document.createElement("span");
  runText.textContent = "Adicionar";
  runButton.appendChild(runText);
  
  const jumpButton = document.createElement("div");
  jumpButton.classList.add("move-item");
  jumpButton.dataset.setPosition = 7;
  ActionMenu.self.appendChild(jumpButton);

  const jumpIcon = document.createElement("img");
  jumpIcon.src = "";
  jumpButton.appendChild(jumpIcon);

  const jumpText = document.createElement("span");
  jumpText.textContent = "Adicionar";
  jumpButton.appendChild(jumpText);

  const setArea = document.createElement("div");
  setArea.id = "set-area";
  ActionMenu.self.appendChild(setArea);

  for (let i = 0; i < ActionMenu.data.sets.length; i++) {
    const set = ActionMenu.data.sets[i];

    const setItem = document.createElement("div");
    setItem.dataset.setPosition = i;
    setItem.classList.add("set-item");
    setArea.appendChild(setItem);

    const icon = document.createElement("img");
    icon.src = "";
    setItem.appendChild(icon);

    const text = document.createElement("span");
    text.textContent = "Adicionar"
    setItem.appendChild(text)

    if (!set.name) continue;
  }

  return ActionMenu.self;
};