import './checkbox-list.scss';

class CheckboxList {
	constructor(id, component) {
		this.id = id;
		this.button = component.querySelector(".checkbox-list__head");
		this.buttonIsActive = component.querySelector(".checkbox-list__head_active");
		this.list = component.querySelector(".checkbox-list__items");

		this._handleButtonClick = this._handleButtonClick.bind(this); 
	}

	addEventListeners() {
		if(this.buttonIsActive)
			this.button.addEventListener("click", this._handleButtonClick);

		this.list.addEventListener("click", this._handleBoxClick);
	}

	_handleBoxClick(evt) {
		if(evt.target.classList[0] === "checkbox-list__box") {
			evt.target.classList.toggle("checkbox-list__box_active");
		}
	}

	_handleButtonClick(evt) {
		if(evt.target.classList[0] === "checkbox-list__head") {
			this.list.classList.toggle("checkbox-list__items_hide");
		}
	}
}

let checkboxLists = (function() {
	let checkboxButtons = document.querySelectorAll(".checkbox-list");

	let id = 0;
	let newListItems = [];
	for(let item = 0; item < checkboxButtons.length; item++) {
		let newListItem = new CheckboxList(id++, checkboxButtons[item]);
		newListItem.addEventListeners();
		newListItems.push(newListItem);
	}

	return newListItems;
})();
