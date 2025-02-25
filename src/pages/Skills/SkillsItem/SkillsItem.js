export class SkillsItem {
    constructor() {}

    update = () => {

    };

    create = (skill) => {
        this.self = document.createElement("div");
        this.self.classList.add("skill");
    
        const iconBorder = document.createElement("div");
        iconBorder.classList.add("icon-border");
        this.self.appendChild(iconBorder);
    
        const octagon = document.createElement("div");
        octagon.classList.add("octagon");
        iconBorder.appendChild(octagon);
    
        const icon = document.createElement("img");
        icon.classList.add("icon");
        icon.src = skill.icon.src;
        icon.alt = skill.icon.alt;
        iconBorder.appendChild(icon);
        
        const info = document.createElement("div");
        info.classList.add("info");
        this.self.appendChild(info);
        
        const name = document.createElement("span");
        name.textContent = skill.name;
        name.style.textTransform = "uppercase";
        name.classList.add("name");
        info.appendChild(name);
    
        const typeLevel = document.createElement("div");
        typeLevel.classList.add("type-level")
        info.appendChild(typeLevel);
    
        const areaType = document.createElement("span");
        areaType.textContent = skill.details.type;
        areaType.classList.add("area-type");
        typeLevel.appendChild(areaType);
    
        const level = document.createElement("span");
        level.classList.add("area-type");
        level.textContent = skill.experience.level;
        typeLevel.appendChild(level);
        
        const cost = document.createElement("div");
        cost.classList.add("cost");
        info.appendChild(cost);

        for (const costType in skill.cost) {
            if (skill.cost[costType] === 0) continue;
            const icon = document.createElement("img");
            icon.classList.add("cost-icon");
            icon.classList.add(costType);
            cost.appendChild(icon);
            const span = document.createElement("span");
            span.textContent = skill.cost[costType];
            span.classList.add("cost-way");
            span.classList.add(costType);
            cost.appendChild(span);
        }
        
        return this.self;
    };
};
