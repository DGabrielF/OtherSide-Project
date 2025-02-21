export const SkillAddEdit = {
    self: null,
    entries: [],
    show: () => {},
    hide: () => {},
    create: () => {},
};

SkillAddEdit.entries = [
    {name: "Nome", type: "text", tag: "name", array: false},
    {name: "Rank", type: "number", tag: "rank", array: false},
    {name: "Descrição", type: "textarea", tag: "description", array: false},
    {name: "Tipo de Execução", type: "text", tag: "type", array: false},
    {name: "Icone", type: "file", tag: "icon", array: false},
    {name: "Atributos", type: "input", tag: "base", array: [
        {name: "ofensiva", type: "number", tag: "offensive", placeholder: "1.0"},
        {name: "defensiva", type: "number", tag: "defensive", placeholder: "1.0"},
        {name: "tempo de espera", type: "number", tag: "cooldown", placeholder: "1.0"},
        {name: "experiência base", type: "number", tag: "expSkill", placeholder: "1.0"},
    ]},
    {name: "Custos", type: "input", tag: "costs", array: [
        {name: "Mana", type: "number", tag: "mana", placeholder: "1"},
        {name: "Estamina", type: "number", tag: "stamina", placeholder: "1"},
        {name: "Espirito", type: "number", tag: "soul", placeholder: "1"},
        {name: "Saúde", type: "number", tag: "health", placeholder: "1"},
    ]},
    {name: "Aplicação", type: "options", tag: "way", array: [
        {name: "em si mesmo", value: "self"},
        {name: "alvo", value: "target"},
        {name: "área ao redor", value: "surrounding-area"},
        {name: "área alvo", value: "target-area"},
        {name: "projétil", value: "projectile"},
        {name: "fluxo", value: "flow"},
        {name: "parede", value: "wall"},
    ]},
    {name: "Natureza", type: "empty", tag: "nature", array: true},
    {name: "Efeitos", type: "empty", tag: "effects", array: true},
    {name: "Bônus", type: "empty-input", tag: "bonus", array: true},
];

SkillAddEdit.show = () => {
    SkillAddEdit.self.classList.remove("hide");
}

SkillAddEdit.hide = () => {
    SkillAddEdit.self.classList.add("hide");
}

SkillAddEdit.create = () => {
    SkillAddEdit.self = document.createElement("section");
    SkillAddEdit.self.classList.add("hide");
    SkillAddEdit.self.classList.add("skill-add-edit");

    const title = document.createElement("h1");
    title.textContent = "Cadastrar Skill";
    SkillAddEdit.self.appendChild(title);

    const form = document.createElement("div");
    SkillAddEdit.self.appendChild(form);

    for (const entry of SkillAddEdit.entries) {
        const newEntry = createEntries(entry);
        if (!newEntry) continue;
        form.appendChild(newEntry);
    }

    const buttonArea = document.createElement("div");
    buttonArea.classList.add("button-area");
    SkillAddEdit.self.appendChild(buttonArea);

    const saveButton = document.createElement("button");
    saveButton.classList.add("agree");
    saveButton.textContent = "salvar";
    saveButton.addEventListener("click", (e) => save(e));
    buttonArea.appendChild(saveButton);

    const closeButton = document.createElement("button");
    closeButton.classList.add("deny");
    closeButton.textContent = "fechar";
    closeButton.addEventListener("click", () => SkillAddEdit.hide());
    buttonArea.appendChild(closeButton);

    return SkillAddEdit.self;
}

function createEntries (entry) {
    const div = document.createElement("div");
    if (entry.array) {
        div.classList.add(entry.type);
        if (entry.type === "input") {
            const title = document.createElement("span");
            title.textContent = entry.name;
            div.appendChild(title);
            for (const sub of entry.array) {
                const item = document.createElement("div");
                div.appendChild(item);

                const label = createLabel(`${entry.tag}-${sub.tag}`, sub.name)
                item.appendChild(label);
                const input = document.createElement("input");
                input.id = `${entry.tag}-${sub.tag}`;
                input.classList.add(sub.type);
                input.type = sub.type;
                input.placeholder = sub.placeholder;
                item.appendChild(input);
            }
        } else if (entry.type === "options") {
            const label = createLabel(`new-${entry.tag}`, entry.name);
            div.appendChild(label);
            div.innerHTML += `<input id="new-${entry.tag}" list="${entry.tag}-list" placeholder="${entry.name}"></input>`;
            const options = document.createElement("datalist");
            options.id = `${entry.tag}-list`;
            for (const sub of entry.array) {
                const option = document.createElement("option");
                option.textContent = sub.name;
                option.value = sub.value;
                options.appendChild(option);
            }
            div.appendChild(options);
        } else if (entry.type === "empty") {
            const span = document.createElement("span");
            span.textContent = entry.name;
            div.appendChild(span);
            const area = document.createElement("div");
            area.classList.add(`${entry.tag}-inputs`);
            div.appendChild(area);
            const input = document.createElement("input");
            area.appendChild(input);
            const button = document.createElement("button");
            button.classList.add("agree");
            button.addEventListener("click", (e) => addEntry(e))
            button.textContent = "+";
            div.appendChild(button);
        } else if (entry.type === "empty-input") {
            const span = document.createElement("span");
            span.textContent = entry.name;
            div.appendChild(span);
            const area = document.createElement("div");
            area.classList.add(`${entry.tag}-inputs`);
            div.appendChild(area);
            const inputLabel = document.createElement("input");
            area.appendChild(inputLabel);
            const inputValue = document.createElement("input");
            inputValue.placeholder = "1.0"
            inputValue.classList.add("number");
            inputValue.type = "number";
            area.appendChild(inputValue);
            const button = document.createElement("button");
            button.classList.add("agree");
            button.addEventListener("click", (e) => addEntryInput(e))
            button.textContent = "+";
            div.appendChild(button);
        }
    } else {
        div.classList.add("basic");
        div.appendChild(createLabel(`new-${entry.tag}`, entry.name));
        const input = document.createElement(entry.type === "textarea"?"textarea":"input");
        input.id = `new-${entry.tag}`;
        if (entry.type !== "textarea") input.type = entry.type;
        input.placeholder = entry.name;
        div.appendChild(input);
    }
    return div;
}

function createLabel(tag, text) {
    const label = document.createElement("label");
    label.for = tag;
    label.textContent = text;
    return label;
}

function addEntry(event) {
    const target = event.target;
    const parent = target.parentNode;
    const inputArea = parent.querySelector('[class$="-inputs"]');
    if (inputArea) {
        const emptyEntries = [...inputArea.querySelectorAll("input")].filter(input => input.value.trim() === '');
        if (emptyEntries.length <= 0) {
            const input = document.createElement("input");
            inputArea.appendChild(input);
        }
    }
}

function addEntryInput(event) {
    const target = event.target;
    const parent = target.parentNode;
    const inputArea = parent.querySelector('[class$="-inputs"]');
    if (inputArea) {
        const emptyEntries = [...inputArea.querySelectorAll("input")].filter(input => input.value.trim() === '');
        if (emptyEntries.length <= 0) {
            const input = document.createElement("input");
            inputArea.appendChild(input);

            const inputValue = document.createElement("input");
            inputValue.placeholder = "1.0"
            inputValue.classList.add("number");
            inputValue.type = "number";
            inputArea.appendChild(inputValue)
        }
    }
}

function save(event) {
    const parent = event.target.parentNode;
    const inputs = parent.querySelectorAll("input");
    const data = [];
    for (const input of inputs) {
        if (input.id) {
            data.push({ id: input.id, value: [input.value] });
        } else {
            if (!input.value) continue;

            const parent = input.parentNode;
            const parentClass = parent.classList[0];
            const attribute = parentClass.split('-')[0];
            const foundAttribute = data.find(item => item.id === attribute);
            if (foundAttribute) {
                foundAttribute.value.push(input.value);
            } else {
                data.push({ id: attribute, value: [input.value] });
            };
        }
    }
}