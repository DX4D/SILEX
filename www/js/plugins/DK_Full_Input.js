/*
Title: Full Input
Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
Site: http://dk-plugins.ru
Group in VK: http://vk.com/dkplugins
Version: 2.1
Release: 07.01.2017
First release: 30.01.2016
Supported languages: Russian, English
*/

/*ru
Название: Полный Ввод
Автор: DK (Денис Кузнецов) (http://vk.com/dk_plugins)
Сайт: http://dk-plugins.ru
Группа ВК: http://vk.com/dkplugins
Версия: 2.1
Релиз: 07.01.2017
Первый релиз: 30.01.2016
Поддерживаемые языки: Русский, Английский
*/

//===========================================================================
// Settings of the plugin
// Настройки плагина
//===========================================================================

/* Instruction

 Settings for key codes of the keyboard
 Key code: symbol in quotes

 */

/* Инструкция

 Настройка кодов клавиш клавиатуры
 Код клавиши: символ в кавычках

 */

Input.keyMapper = {
	8: 'backspace',	// backspace
    9: 'tab',		// tab
    13: 'ok',		// enter
    16: 'shift',	// shift
    17: 'control',	// control
    18: 'alt',  	// alt
	19: 'pause',	// pause
	20: 'capslock',	// capslock
    27: 'escape',   // escape
    32: 'space',	// space
    33: 'pageup',   // pageup
    34: 'pagedown', // pagedown
	35: 'end',		// end
	36: 'home',		// home
    37: 'left',     // left arrow
    38: 'up',       // up arrow
    39: 'right',    // right arrow
    40: 'down',     // down arrow
	44: 'printscreen',	// printscreen
    45: 'insert',   // insert
	46: 'delete',	// delete
	47: '/',		// /
	48: '0',		// 0
	49: '1',		// 1
	50: '2',		// 2
	51: '3',		// 3
	52: '4',		// 4
	53: '5',		// 5
	54: '6',		// 6
	55: '7',		// 7
	56: '8',		// 8
	57: '9',		// 9
	65: 'a',		// a ф
	66: 'b',		// b и
	67: 'c',		// c с
	68: 'd',		// d в
	69: 'e',		// e у
	70: 'f',		// f а
	71: 'g',		// g п
	72: 'h',		// h р
	73: 'i',		// i ш
	74: 'j',		// j о
	75: 'k',		// k л
	76: 'l',		// l д
	77: 'm',		// m ь
	78: 'n',		// n т
	79: 'o',		// o щ
	80: 'p',		// p з
    81: 'q',		// q й
	82: 'r',		// r к
	83: 's',		// s ы
	84: 't',		// t е
	85: 'u',		// u г
	86: 'v',		// v м
    87: 'w',		// w ц
    88: 'x',		// x ч
	89: 'y',		// y н
    90: 'z',		// z я
    96: 'escape',   // numpad 0
	97: 'numpad1',	// numpad 1
    98: 'down',     // numpad 2
	99: 'numpad3',	// numpad 3
    100: 'left',    // numpad 4
	101: 'numpad5',	// numpad 5
    102: 'right',   // numpad 6
	103: 'numpad7',	// numpad 7
    104: 'up',      // numpad 8
	105: 'numpad9', // numpad 9
	106: '*',		// *
	107: '+',		// +
	109: '-',		// -
	110: '.',		// .
	111: '/',		// /
	112: 'f1',		// F1
	113: 'f2',		// F2
	114: 'f3',		// F3
	115: 'f4',		// F4
	116: 'f5',		// F5
	117: 'f6',		// F6
	118: 'f7',		// F7
	119: 'f8',		// F8
    120: 'debug',   // F9
	121: 'f10',		// F10
	122: 'f11',		// F11
	123: 'f12',		// F12
	144: 'numlock',	// numlock
	145: 'scrolllock',	// scrolllock
	186: ';',		// :;ж
	187: '=',		// +=
	188: '<',		// <,Б
	189: '-',		// -_
	190: '>',		// >.Ю
	191: '?',		// /?,/.
	192: '`',		// ~`ё
	219: '[',		// {[х
	220: '|',		// |
	221: ']',		// }]ъ
	222: '"'		// "'э
};

/* Instruction

 Settings for key codes of the gamepad
 Key code: symbol in quotes

 */

/* Инструкция

 Настройка кодов клавиш геймпада
 Код клавиши: символ в кавычках

 */

Input.gamepadMapper = {
    0: 'ok',        // A
    1: 'cancel',    // B
    2: '2',     // X
    3: '3',      // Y
    4: 'pageup',    // LB (L1)
    5: 'pagedown',  // RB (R1)
	6: '7',		// LT (L2)
	7: 'shift',		// RT (R2)
	8: 'select',	// Select
	9: 'start',		// Start
	10: 'l3',		// L3 (Left Stick pressed)
	11: 'r3',		// R3 (Right Stick pressed)
    12: 'up',       // up arrow (D-pad)
    13: 'down',     // down arrow (D-pad)
    14: 'left',     // left arrow (D-pad)
    15: 'right',    // right arrow (D-pad)
	16: 'up',		// Left Stick up
	17: 'down',	// Left Stick down
	18: 'left',	// Left Stick left
	19: 'right',	// Left Stick right
	20: 'r_up',		// Right Stick up
	21: 'r_down',	// Right Stick down
	22: 'r_left',	// Right Stick left
	23: 'r_right'	// Right Stick right
};

//===========================================================================
// End of the plugin settings
// Конец настройки плагина
//===========================================================================

/*:
* @plugindesc v.2.1 All keys on the keyboard and gamepad
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DK_Full_Input
 Author: DK (Denis Kuznetsov) (http://vk.com/dk_plugins)
 Site: http://dk-plugins.ru
 VK Group: http://vk.com/dkplugins
 Version: 2.1
 Release: 07.01.2017
 First release: 30.01.2016
 Supported languages: Russian, English

 ### Warning ###
 The plugin contains the settings in the file

 Be careful with downloading plugins to the project folder
 Some plugins have settings in his file
 At update this settings can be overwritten
 
 ### Important information ###
 Default RPG Maker MV values for Alt, Space, Insert, Q, W, X, Z
 Alt: 'control'
 Space: 'ok'
 Insert: 'escape'
 Q: 'pageup'
 W: 'pagedown'
 X: 'escape'
 Z: 'ok'
 
 The values of this plugin for Alt, Space, Insert, Q, W, X, Z
 Alt: 'alt'
 Space: 'space'
 Insert: 'insert'
 Q: 'q'
 W: 'w'
 X: 'x'
 Z: 'z'

 Left stick of gamepad separated from keys of controls (arrows) and have him own settings
 Default values for left stick at RPG Maker MV: up, down, left, right
 Values for left stick at this plugin: l_up, l_down, l_left, l_right

 Values for right stick at this plugin: r_up, r_down, r_left, r_right

 ### Instruction ###
 Open DK_Full_Input.js and customize keys inside "Settings of the plugin" and "End of the plugin settings"
 
 ### For developers ###
 All functions return name of pressed button
 If button was don't pressed, then function returns null

 returnCode - return key code ? true or false
 If returnCode is false, then will return name of button

 Added functions for check pressed key code:

 Input.keyPressed(code, gamepadCode, returnCode)
 Input.keyTriggered(code, gamepadCode, returnCode)
 Input.keyRepeated(code, gamepadCode, returnCode)
 Input.keyLongPressed(code, gamepadCode, returnCode)
 
 code - keyboard key code
 gamepadCode - gamepad key code

 If need check only gamepad, write null instead the codes

 Functions to check any directions of moving buttons:
 Checking is carried out for the symbols: up, down, left, right
 Input.anyDirectionPressed(returnCode)
 Input.anyDirectionTriggered(returnCode)
 Input.anyDirectionRepeated(returnCode)
 Input.anyDirectionLongPressed(returnCode)

 Functions to check deflection of left stick to any direction:
 Checking is carried out for the symbols: l_up, l_down, l_left, l_right
 Input.anyLDirectionPressed(returnCode)
 Input.anyLDirectionTriggered(returnCode)
 Input.anyLDirectionRepeated(returnCode)
 Input.anyLDirectionLongPressed(returnCode)

 Functions to check deflection of right stick to any direction:
 Checking is carried out for the symbols: r_up, r_down, r_left, r_right
 Input.anyRDirectionPressed(returnCode)
 Input.anyRDirectionTriggered(returnCode)
 Input.anyRDirectionRepeated(returnCode)
 Input.anyRDirectionLongPressed(returnCode)

 Functions to check one of many buttons with key codes:
 Input.anyKeyPressed(codes, gamepadCodes, returnCode)
 Input.anyKeyTriggered(codes, gamepadCodes, returnCode)
 Input.anyKeyRepeated(codes, gamepadCodes, returnCode)
 Input.anyKeyLongPressed(codes, gamepadCodes, returnCode)

 codes - array of codes keyboard buttons
 gamepadCodes - array of codes gamepad buttons

 If need check only gamepad, write null instead the code

 Functions to check one of many buttons with key names:
 Input.anyPressed(keys, returnCode)
 Input.anyTriggered(keys, returnCode)
 Input.anyRepeated(keys, returnCode)
 Input.anyLongPressed(keys, returnCode)

 keys - array of buttons name

 Functions to check pressing of any numbers:
 Input.anyNumberPressed(returnCode)
 Input.anyNumberTriggered(returnCode)
 Input.anyNumberRepeated(returnCode)
 Input.anyNumberLongPressed(returnCode)

 Functions to check pressing of any Numpad buttons:
 Input.anyNumpadPressed(returnCode)
 Input.anyNumpadTriggered(returnCode)
 Input.anyNumpadRepeated(returnCode)
 Input.anyNumpadLongPressed(returnCode)

 Functions to check pressing of any alphabet letters:
 Input.anyAlphabetPressed(returnCode)
 Input.anyAlphabetTriggered(returnCode)
 Input.anyAlphabetRepeated(returnCode)
 Input.anyAlphabetLongPressed(returnCode)

 Functions to check pressing of any F1-F12 button:
 Input.anyFPressed(returnCode)
 Input.anyFTriggered(returnCode)
 Input.anyFRepeated(returnCode)
 Input.anyFLongPressed(returnCode)
 
 Also added functions for checking pressed Backspace, Tab, Enter, Shift, Ctrl, Alt, Escape, Space

 Backspace:
 Input.BackspacePressed()
 Input.BackspaceTriggered()
 Input.BackspaceRepeated()
 Input.BackspaceLongPressed()

 Tab:
 Input.TabPressed()
 Input.TabTriggered()
 Input.TabRepeated()
 Input.TabLongPressed()

 Enter:
 Input.EnterPressed()
 Input.EnterTriggered()
 Input.EnterRepeated()
 Input.EnterLongPressed()

 Shift:
 Input.ShiftPressed()
 Input.ShiftTriggered()
 Input.ShiftRepeated()
 Input.ShiftLongPressed()

 Ctrl:
 Input.CtrlPressed()
 Input.CtrlTriggered()
 Input.CtrlRepeated()
 Input.CtrlLongPressed()

 Alt:
 Input.AltPressed()
 Input.AltTriggered()
 Input.AltRepeated()
 Input.AltLongPressed()

 Escape:
 Input.EscapePressed()
 Input.EscapeTriggered()
 Input.EscapeRepeated()
 Input.EscapeLongPressed()

 Space:
 Input.SpacePressed()
 Input.SpaceTriggered()
 Input.SpaceRepeated()
 Input.SpaceLongPressed()
 
 If you create a plugin based on this:
 Before using any function, make sure that the user has installed the plugin:
 if (Imported.DK_Full_Input)

 Get plugin version:
 var version = DKVersion.DK_Full_Input;

 ### License and terms of use for plugin ###
 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (please, inform, if you do this)

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)
 -Change code of plugin out of border "Plugin settings" and "End of plugin settings" (if you found a bug contact me)

*/

/*:ru
 * @plugindesc v.2.1 Использование всех кнопок клавиатуры и геймпада
 * @author DK (Денис Кузнецов)
 * @help

 ### Информация о плагине ###
 Название: DK_Full_Input
 Автор: DK (Денис Кузнецов) (http://vk.com/dk_plugins)
 Сайт: http://dk-plugins.ru
 Группа ВК: http://vk.com/dkplugins
 Версия: 2.1
 Релиз: 07.01.2017
 Первый релиз: 30.01.2016
 Поддерживаемые языки: Русский, Английский

 ### Внимание ###
 Плагин содержит настройки внутри файла

 Будьте внимательны при скачивании плагинов в папку проекта
 Некоторые плагины имеют настройки в самом файле
 При обновлении эти настройки могут быть перезаписаны

 ### Важная информация ###
 Изменено назначение следующих клавиш:
 Alt, Space, Insert, Q, W, X, Z
 
 Стандартные значения клавиш в RPG Maker MV для Alt, Space, Insert, Q, W, X, Z
 Alt: 'control'
 Space: 'ok'
 Insert: 'escape'
 Q: 'pageup'
 W: 'pagedown'
 X: 'escape'
 Z: 'ok'
 
 Значения для клавиш в этом плагине Alt, Space, Insert, Q, W, X, Z
 Alt: 'alt'
 Space: 'space'
 Insert: 'insert'
 Q: 'q'
 W: 'w'
 X: 'x'
 Z: 'z'

 Левый стик геймпада отделен от клавиш управления (стрелочек) и имеет свои настройки
 Стандартные значения для левого стика в RPG Maker MV: up, down, left, right
 Значения для левого стика в этом плагине: l_up, l_down, l_left, l_right

 Значения для правого стика в этом плагине: r_up, r_down, r_left, r_right
 
 ### Инструкция ###
 Открыть DK_Full_Input.js и изменить клавиши внутри "Настройки плагина" и "Конец настройки плагина"
 
 ### Для разработчиков ###
 Все функции возвращают название нажатой клавиши
 Если клавиша не была нажата, то функция возвращает null

 returnCode - вернуть код клавиши ? true или false
 Если false, то будет возвращено название клавиши

 Добавлены функции проверки нажатия клавиш по коду:
 
 Input.keyPressed(code, gamepadCode, returnCode)
 Input.keyTriggered(code, gamepadCode, returnCode)
 Input.keyRepeated(code, gamepadCode, returnCode)
 Input.keyLongPressed(code, gamepadCode, returnCode)
 
 code - код клавиши клавиатуры
 gamepadCode - код клавиши геймпада

 Если нужно проверить только геймпад, то вместо code напишите null

 Функции проверки нажатия любого из направлений движения:
 Проверка осуществляется для символов: up, down, left, right
 Input.anyDirectionPressed(returnCode)
 Input.anyDirectionTriggered(returnCode)
 Input.anyDirectionRepeated(returnCode)
 Input.anyDirectionLongPressed(returnCode)

 Функции проверки отклонения левого стика в какую-либо сторону:
 Проверка осуществляется для символов: l_up, l_down, l_left, l_right
 Input.anyLDirectionPressed(returnCode)
 Input.anyLDirectionTriggered(returnCode)
 Input.anyLDirectionRepeated(returnCode)
 Input.anyLDirectionLongPressed(returnCode)

 Функции проверки отклонения правого стика в какую-либо сторону:
 Проверка осуществляется для символов: r_up, r_down, r_left, r_right
 Input.anyRDirectionPressed(returnCode)
 Input.anyRDirectionTriggered(returnCode)
 Input.anyRDirectionRepeated(returnCode)
 Input.anyRDirectionLongPressed(returnCode)

 Функции проверки нажатия одной из нескольких клавиш по коду клавиш:
 Input.anyKeyPressed(codes, gamepadCodes, returnCode)
 Input.anyKeyTriggered(codes, gamepadCodes, returnCode)
 Input.anyKeyRepeated(codes, gamepadCodes, returnCode)
 Input.anyKeyLongPressed(codes, gamepadCodes, returnCode)

 codes - массив кодов клавиш клавиатуры
 gamepadCodes - массив кодов клавиш геймпада

 Если нужно проверить только геймпад, то вместо codes напишите null

 Функции проверки нажатия одной из нескольких клавиш по названию клавиш:
 Input.anyPressed(keys, returnCode)
 Input.anyTriggered(keys, returnCode)
 Input.anyRepeated(keys, returnCode)
 Input.anyLongPressed(keys, returnCode)

 keys - массив названий клавиш

 Функции проверки нажатия любой цифры:
 Input.anyNumberPressed(returnCode)
 Input.anyNumberTriggered(returnCode)
 Input.anyNumberRepeated(returnCode)
 Input.anyNumberLongPressed(returnCode)

 Функции проверки нажатия любой клавиши Numpad:
 Input.anyNumpadPressed(returnCode)
 Input.anyNumpadTriggered(returnCode)
 Input.anyNumpadRepeated(returnCode)
 Input.anyNumpadLongPressed(returnCode)

 Функции проверки нажатия любой буквы алфавита:
 Input.anyAlphabetPressed(returnCode)
 Input.anyAlphabetTriggered(returnCode)
 Input.anyAlphabetRepeated(returnCode)
 Input.anyAlphabetLongPressed(returnCode)

 Функции проверки нажатия любой клавиши F1-F12:
 Input.anyFPressed(returnCode)
 Input.anyFTriggered(returnCode)
 Input.anyFRepeated(returnCode)
 Input.anyFLongPressed(returnCode)

 Также добавлены функции проверки нажатия клавиш Backspace, Tab, Enter, Shift, Ctrl, Alt, Escape, Space

 Backspace:
 Input.BackspacePressed()
 Input.BackspaceTriggered()
 Input.BackspaceRepeated()
 Input.BackspaceLongPressed()

 Tab:
 Input.TabPressed()
 Input.TabTriggered()
 Input.TabRepeated()
 Input.TabLongPressed()

 Enter:
 Input.EnterPressed()
 Input.EnterTriggered()
 Input.EnterRepeated()
 Input.EnterLongPressed()

 Shift:
 Input.ShiftPressed()
 Input.ShiftTriggered()
 Input.ShiftRepeated()
 Input.ShiftLongPressed()

 Ctrl:
 Input.CtrlPressed()
 Input.CtrlTriggered()
 Input.CtrlRepeated()
 Input.CtrlLongPressed()

 Alt:
 Input.AltPressed()
 Input.AltTriggered()
 Input.AltRepeated()
 Input.AltLongPressed()
 
 Escape:
 Input.EscapePressed()
 Input.EscapeTriggered()
 Input.EscapeRepeated()
 Input.EscapeLongPressed()
 
 Space:
 Input.SpacePressed()
 Input.SpaceTriggered()
 Input.SpaceRepeated()
 Input.SpaceLongPressed()
 
 Если Вы создаете свой плагин на основе этого:
 Перед использованием любых функций убедитесь, что у пользователя установлен данный плагин:
 if (Imported.DK_Full_Input)

 Получить версию плагина:
 var version = DKVersion.DK_Full_Input;
 
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
*/

var Imported = Imported || {};
Imported.DK_Full_Input = true;

var DKVersion = DKVersion || {};
DKVersion.DK_Full_Input = 2.1;

/**
 * @private
 * @type {Number}
 */
Input._threshold = 0.5;

/**
 * @private
 * @method _updateGamepadState
 * @param gamepad
 */
Input._updateGamepadState = function(gamepad) {
	var lastState = this._gamepadStates[gamepad.index] || [];
	var newState = [];
	var buttons = gamepad.buttons;
	var axes = gamepad.axes;
	var threshold = this._threshold;

	for (var i = 0; i < buttons.length; i++) {
		newState[i] = buttons[i].pressed;
	}

	newState[16] = axes[1] < -threshold; // l_up
	newState[17] = axes[1] > threshold; // l_down
	newState[18] = axes[0] < -threshold; // l_left
	newState[19] = axes[0] > threshold; // l_right
	newState[20] = axes[3] < -threshold; // r_up
	newState[21] = axes[3] > threshold; // r_down
	newState[22] = axes[2] < -threshold; // r_left
	newState[23] = axes[2] > threshold; // r_right

	for(var i = 0; i < newState.length; i++) {
		if (newState[i] === lastState[i]) {
			continue;
		}
		var buttonName = this.gamepadMapper[i];
		if (buttonName) {
			this._currentState[buttonName] = newState[i];
		}
	}
	this._gamepadStates[gamepad.index] = newState;
};

/**
 * @method keyNameByCode
 * @param {Number} code
 * @returns {String | null}
 */
Input.keyNameByCode = function(code) {
	return this.keyMapper[code] || this.gamepadMapper[code];
};

/**
 * @method keyCodeByName
 * @param {String} name
 * @returns {Number | null}
 */
Input.keyCodeByName = function(name) {
	for(var code in this.keyMapper) {
		if (this.keyMapper[code] === name) {
			return code;
		}
	}
	for(var code in this.gamepadMapper) {
		if (this.gamepadMapper[code] === name) {
			return code;
		}
	}
	return null;
};

/**
 * @method anyArrayNameHandler
 * @param {String[]} array
 * @param {Function} method
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyArrayNameHandler = function(array, method, returnCode) {
	array = array || [];
	for(var i = 0; i < array.length; i++) {
		var name = array[i];
		if (method(name)) {
			return returnCode ? this.keyCodeByName(name) : name;
		}
	}
	return null;
};

/**
 * @method anyArrayCodeHandler
 * @param {Number[]} array
 * @param {Function} method
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyArrayCodeHandler = function(array, method, returnCode) {
	array = array || [];
	for(var i = 0; i < array.length; i++) {
		var code = array[i];
		if (method(code)) {
			return returnCode ? code : this.keyNameByCode(code);
		}
	}
	return null;
};

/**
 * @method anyForCodeHandler
 * @param {Number} start
 * @param {Number} finish
 * @param {Function} method
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyForCodeHandler = function(start, finish, method, returnCode) {
	for(var code = start; code < finish + 1; code++) {
		var result = method(code, null, returnCode);
		if (result) {
			return result;
		}
	}
	return null;
};

// Key Code

/**
 * @method keyHandler
 * @param {Number | null} code
 * @param {Number | null} gamepadCode
 * @param {Function} method
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.keyHandler = function(code, gamepadCode, method, returnCode) {
	var keyboardName = this.keyMapper[code];
	var gamepadName = this.gamepadMapper[gamepadCode];
	if (!keyboardName && !gamepadName) {
		return null;
	}
	if (method(keyboardName)) {
		return returnCode ? code : keyboardName;
	}
	if (method(gamepadName)) {
		return returnCode ? gamepadCode : gamepadName;
	}
	return null;
};

/**
 * @method keyPressed
 * @param {Number | null} code
 * @param {Number | null} gamepadCode
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.keyPressed = function(code, gamepadCode, returnCode) {
	return this.keyHandler(code, gamepadCode, this.isPressed.bind(this), returnCode);
};

/**
 * @method keyTriggered
 * @param {Number | null} code
 * @param {Number | null} gamepadCode
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.keyTriggered = function(code, gamepadCode, returnCode) {
	return this.keyHandler(code, gamepadCode, this.isTriggered.bind(this), returnCode);
};

/**
 * @method keyRepeated
 * @param {Number | null} code
 * @param {Number | null} gamepadCode
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.keyRepeated = function(code, gamepadCode, returnCode) {
	return this.keyHandler(code, gamepadCode, this.isRepeated.bind(this), returnCode);
};

/**
 * @method keyLongPressed
 * @param {Number | null} code
 * @param {Number | null} gamepadCode
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.keyLongPressed = function(code, gamepadCode, returnCode) {
	return this.keyHandler(code, gamepadCode, this.isLongPressed.bind(this), returnCode);
};

// any Direction (symbols: up, down, left, right)

/**
 * @method anyDirectionHandler
 * @param {Function} method
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyDirectionHandler = function(method, returnCode) {
	var array = ['up', 'down', 'left', 'right'];
	return this.anyArrayNameHandler(array, method, returnCode);
};

/**
 * @method anyDirectionPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyDirectionPressed = function(returnCode) {
	return this.anyDirectionHandler(this.isPressed.bind(this), returnCode);
};

/**
 * @method anyDirectionTriggered
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyDirectionTriggered = function(returnCode) {
	return this.anyDirectionHandler(this.isTriggered.bind(this), returnCode);
};

/**
 * @method anyDirectionRepeated
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyDirectionRepeated = function(returnCode) {
	return this.anyDirectionHandler(this.isRepeated.bind(this), returnCode);
};

/**
 * @method anyDirectionLongPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyDirectionLongPressed = function(returnCode) {
	return this.anyDirectionHandler(this.isLongPressed.bind(this), returnCode);
};

// only Left Stick (symbols: l_up, l_down, l_left, l_right)

/**
 * @method anyLDirectionHandler
 * @param {Function} method
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyLDirectionHandler = function(method, returnCode) {
	var array = ['l_up', 'l_down', 'l_left', 'l_right'];
	return this.anyArrayNameHandler(array, method, returnCode);
};

/**
 * @method anyLDirectionPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyLDirectionPressed = function(returnCode) {
	return this.anyLDirectionHandler(this.isPressed.bind(this), returnCode);
};

/**
 * @method anyLDirectionTriggered
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyLDirectionTriggered = function(returnCode) {
	return this.anyLDirectionHandler(this.isTriggered.bind(this), returnCode);
};

/**
 * @method anyLDirectionRepeated
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyLDirectionRepeated = function(returnCode) {
	return this.anyLDirectionHandler(this.isRepeated.bind(this), returnCode);
};

/**
 * @method anyLDirectionLongPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyLDirectionLongPressed = function(returnCode) {
	return this.anyLDirectionHandler(this.isLongPressed.bind(this), returnCode);
};

// only Right Stick (symbols: r_up, r_down, r_left, r_right)

/**
 * @method anyRDirectionHandler
 * @param {Function} method
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyRDirectionHandler = function(method, returnCode) {
	var array = ['r_up', 'r_down', 'r_left', 'r_right'];
	return this.anyArrayNameHandler(array, method, returnCode);
};

/**
 * @method anyRDirectionPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyRDirectionPressed = function(returnCode) {
	return this.anyRDirectionHandler(this.isPressed.bind(this), returnCode);
};

/**
 * @method anyRDirectionTriggered
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyRDirectionTriggered = function(returnCode) {
	return this.anyRDirectionHandler(this.isTriggered.bind(this), returnCode);
};

/**
 * @method anyRDirectionRepeated
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyRDirectionRepeated = function(returnCode) {
	return this.anyRDirectionHandler(this.isRepeated.bind(this), returnCode);
};

/**
 * @method anyRDirectionLongPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyRDirectionLongPressed = function(returnCode) {
	return this.anyRDirectionHandler(this.isLongPressed.bind(this), returnCode);
};

// any Key Code

/**
 * @method anyKeyHandler
 * @param {Number[] | null} codes
 * @param {Number[] | null} gamepadCodes
 * @param {Function} method
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyKeyHandler = function(codes, gamepadCodes, method, returnCode) {
	gamepadCodes = gamepadCodes || [];
	var result = this.anyArrayCodeHandler(codes, method, returnCode);
	if (result) {
		return result;
	}
	for(var i = 0; i < gamepadCodes.length; i++) {
		var code = gamepadCodes[i];
		result = method(null, code, returnCode);
		if (result) {
			return result;
		}
	}
	return null;
};

/**
 * @method anyKeyPressed
 * @param {Number[] | null} codes
 * @param {Number[] | null} gamepadCodes
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyKeyPressed = function(codes, gamepadCodes, returnCode) {
	return this.anyKeyHandler(codes, gamepadCodes, this.keyPressed.bind(this), returnCode);
};

/**
 * @method anyKeyTriggered
 * @param {Number[] | null} codes
 * @param {Number[] | null} gamepadCodes
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyKeyTriggered = function(codes, gamepadCodes, returnCode) {
	return this.anyKeyHandler(codes, gamepadCodes, this.keyTriggered.bind(this), returnCode);
};

/**
 * @method anyKeyRepeated
 * @param {Number[] | null} codes
 * @param {Number[] | null} gamepadCodes
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyKeyRepeated = function(codes, gamepadCodes, returnCode) {
	return this.anyKeyHandler(codes, gamepadCodes, this.keyRepeated.bind(this), returnCode);
};

/**
 * @method anyKeyLongPressed
 * @param {Number[] | null} codes
 * @param {Number[] | null} gamepadCodes
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyKeyLongPressed = function(codes, gamepadCodes, returnCode) {
	return this.anyKeyHandler(codes, gamepadCodes, this.keyLongPressed.bind(this), returnCode);
};

// any Key Name

/**
 * @method anyPressed
 * @param {String[]} keys
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyPressed = function(keys, returnCode) {
	return this.anyArrayNameHandler(keys, this.isPressed.bind(this), returnCode);
};

/**
 * @method anyTriggered
 * @param {String[]} keys
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyTriggered = function(keys, returnCode) {
	return this.anyArrayNameHandler(keys, this.isTriggered.bind(this), returnCode);
};

/**
 * @method anyRepeated
 * @param {String[]} keys
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyRepeated = function(keys, returnCode) {
	return this.anyArrayNameHandler(keys, this.isRepeated.bind(this), returnCode);
};

/**
 * @method anyLongPressed
 * @param {String[]} keys
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyLongPressed = function(keys, returnCode) {
	return this.anyArrayNameHandler(keys, this.isLongPressed.bind(this), returnCode);
};

// any Number (codes: 48-57)

/**
 * @method anyNumberPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyNumberPressed = function(returnCode) {
	return this.anyForCodeHandler(48, 57, this.keyPressed.bind(this), returnCode); // 0 - 48, 9 - 57
};

/**
 * @method anyNumberTriggered
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyNumberTriggered = function(returnCode) {
	return this.anyForCodeHandler(48, 57, this.keyTriggered.bind(this), returnCode); // 0 - 48, 9 - 57
};

/**
 * @method anyNumberRepeated
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyNumberRepeated = function(returnCode) {
	return this.anyForCodeHandler(48, 57, this.keyRepeated.bind(this), returnCode); // 0 - 48, 9 - 57
};

/**
 * @method anyNumberLongPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyNumberLongPressed = function(returnCode) {
	return this.anyForCodeHandler(48, 57, this.keyLongPressed.bind(this), returnCode); // 0 - 48, 9 - 57
};

// any Numpad (codes: 96-105)

/**
 * @method anyNumpadPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyNumpadPressed = function(returnCode) {
	return this.anyForCodeHandler(96, 105, this.keyPressed.bind(this), returnCode); // Numpad 0 - 96, Numpad 9 - 105
};

/**
 * @method anyNumpadTriggered
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyNumpadTriggered = function(returnCode) {
	return this.anyForCodeHandler(96, 105, this.keyTriggered.bind(this), returnCode); // Numpad 0 - 96, Numpad 9 - 105
};

/**
 * @method anyNumpadRepeated
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyNumpadRepeated = function(returnCode) {
	return this.anyForCodeHandler(96, 105, this.keyRepeated.bind(this), returnCode); // Numpad 0 - 96, Numpad 9 - 105
};

/**
 * @method anyNumpadLongPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyNumpadLongPressed = function(returnCode) {
	return this.anyForCodeHandler(96, 105, this.keyLongPressed.bind(this), returnCode); // Numpad 0 - 96, Numpad 9 - 105
};

// any Alphabet (codes: 65-90) + for russian: 186, 188, 190, 192, 219, 221, 222

/**
 * @method anyAlphabetHandler
 * @param {Function} method
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyAlphabetHandler = function(method, returnCode) {
	var result = this.anyForCodeHandler(65, 90, method, returnCode);
	if (result || !$gameSystem.isRussian()) {
		return result;
	}
	var array = [186, 188, 190, 192, 219, 221, 222]; // 186 - Ж, 188 - Б, 190 - Ю, 192 - Ё, 219 - Х, 221 - Ъ, 222 - Э
	return this.anyKeyHandler(array, null, method, returnCode);
};

/**
 * @method anyAlphabetPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyAlphabetPressed = function(returnCode) {
	return this.anyAlphabetHandler(this.keyPressed.bind(this), returnCode);
};

/**
 * @method anyAlphabetTriggered
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyAlphabetTriggered = function(returnCode) {
	return this.anyAlphabetHandler(this.keyTriggered.bind(this), returnCode);
};

/**
 * @method anyAlphabetRepeated
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyAlphabetRepeated = function(returnCode) {
	return this.anyAlphabetHandler(this.keyRepeated.bind(this), returnCode);
};

/**
 * @method anyAlphabetLongPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyAlphabetLongPressed = function(returnCode) {
	return this.anyAlphabetHandler(this.keyLongPressed.bind(this), returnCode);
};

// any F (codes: 112-123)

/**
 * @method anyFPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyFPressed = function(returnCode) {
	return this.anyForCodeHandler(112, 123, this.keyPressed.bind(this), returnCode); // F1 - 112, F12 - 123
};

/**
 * @method anyFTriggered
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyFTriggered = function(returnCode) {
	return this.anyForCodeHandler(112, 123, this.keyTriggered.bind(this), returnCode); // F1 - 112, F12 - 123
};

/**
 * @method anyFRepeated
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyFRepeated = function(returnCode) {
	return this.anyForCodeHandler(112, 123, this.keyRepeated.bind(this), returnCode); // F1 - 112, F12 - 123
};

/**
 * @method anyFLongPressed
 * @param {Boolean} [returnCode]
 * @returns {Boolean | null}
 */
Input.anyFLongPressed = function(returnCode) {
	return this.anyForCodeHandler(112, 123, this.keyLongPressed.bind(this), returnCode); // F1 - 112, F12 - 123
};

// Backspace

/**
 * @method BackspacePressed
 * @returns {Boolean | null}
 */
Input.BackspacePressed = function() {
	var code = 8;
	return this.keyPressed(code);
};

/**
 * @method BackspaceTriggered
 * @returns {Boolean | null}
 */
Input.BackspaceTriggered = function() {
	var code = 8;
	return this.keyTriggered(code);
};

/**
 * @method BackspaceRepeated
 * @returns {Boolean | null}
 */
Input.BackspaceRepeated = function() {
	var code = 8;
	return this.keyRepeated(code);
};

/**
 * @method BackspaceLongPressed
 * @returns {Boolean | null}
 */
Input.BackspaceLongPressed = function() {
	var code = 8;
	return this.keyLongPressed(code);
};

// Tab

/**
 * @method TabPressed
 * @returns {Boolean | null}
 */
Input.TabPressed = function() {
	var code = 9;
	return this.keyPressed(code);
};

/**
 * @method TabTriggered
 * @returns {Boolean | null}
 */
Input.TabTriggered = function() {
	var code = 9;
	return this.keyTriggered(code);
};

/**
 * @method TabRepeated
 * @returns {Boolean | null}
 */
Input.TabRepeated = function() {
	var code = 9;
	return this.keyRepeated(code);
};

/**
 * @method TabLongPressed
 * @returns {Boolean | null}
 */
Input.TabLongPressed = function() {
	var code = 9;
	return this.keyLongPressed(code);
};

// Enter

/**
 * @method EnterPressed
 * @returns {Boolean | null}
 */
Input.EnterPressed = function() {
	var code = 13;
	return this.keyPressed(code);
};

/**
 * @method EnterTriggered
 * @returns {Boolean | null}
 */
Input.EnterTriggered = function() {
	var code = 13;
	return this.keyTriggered(code);
};

/**
 * @method EnterRepeated
 * @returns {Boolean | null}
 */
Input.EnterRepeated = function() {
	var code = 13;
	return this.keyRepeated(code);
};

/**
 * @method EnterLongPressed
 * @returns {Boolean | null}
 */
Input.EnterLongPressed = function() {
	var code = 13;
	return this.keyLongPressed(code);
};

// Shift

/**
 * @method ShiftPressed
 * @returns {Boolean | null}
 */
Input.ShiftPressed = function() {
	var code = 16;
	return this.keyPressed(code);
};

/**
 * @method ShiftTriggered
 * @returns {Boolean | null}
 */
Input.ShiftTriggered = function() {
	var code = 16;
	return this.keyTriggered(code);
};

/**
 * @method ShiftRepeated
 * @returns {Boolean | null}
 */
Input.ShiftRepeated = function() {
	var code = 16;
	return this.keyRepeated(code);
};

/**
 * @method ShiftLongPressed
 * @returns {Boolean | null}
 */
Input.ShiftLongPressed = function() {
	var code = 16;
	return this.keyLongPressed(code);
};

// Ctrl

/**
 * @method CtrlPressed
 * @returns {Boolean | null}
 */
Input.CtrlPressed = function() {
	var code = 17;
	return this.keyPressed(code);
};

/**
 * @method CtrlTriggered
 * @returns {Boolean | null}
 */
Input.CtrlTriggered = function() {
	var code = 17;
	return this.keyTriggered(code);
};

/**
 * @method CtrlRepeated
 * @returns {Boolean | null}
 */
Input.CtrlRepeated = function() {
	var code = 17;
	return this.keyRepeated(code);
};

/**
 * @method CtrlLongPressed
 * @returns {Boolean | null}
 */
Input.CtrlLongPressed = function() {
	var code = 17;
	return this.keyLongPressed(code);
};

// Alt

/**
 * @method AltPressed
 * @returns {Boolean | null}
 */
Input.AltPressed = function() {
	var code = 18;
	return this.keyPressed(code);
};

/**
 * @method AltTriggered
 * @returns {Boolean | null}
 */
Input.AltTriggered = function() {
	var code = 18;
	return this.keyTriggered(code);
};

/**
 * @method AltRepeated
 * @returns {Boolean | null}
 */
Input.AltRepeated = function() {
	var code = 18;
	return this.keyRepeated(code);
};

/**
 * @method AltLongPressed
 * @returns {Boolean | null}
 */
Input.AltLongPressed = function() {
	var code = 18;
	return this.keyLongPressed(code);
};

// Escape

/**
 * @method EscapePressed
 * @returns {Boolean | null}
 */
Input.EscapePressed = function() {
	var code = 27;
	return this.keyPressed(code);
};

/**
 * @method EscapeTriggered
 * @returns {Boolean | null}
 */
Input.EscapeTriggered = function() {
	var code = 27;
	return this.keyTriggered(code);
};

/**
 * @method EscapeRepeated
 * @returns {Boolean | null}
 */
Input.EscapeRepeated = function() {
	var code = 27;
	return this.keyRepeated(code);
};

/**
 * @method EscapeLongPressed
 * @returns {Boolean | null}
 */
Input.EscapeLongPressed = function() {
	var code = 27;
	return this.keyLongPressed(code);
};

// Space

/**
 * @method SpacePressed
 * @returns {Boolean | null}
 */
Input.SpacePressed = function() {
	var code = 32;
	return this.keyPressed(code);
};

/**
 * @method SpaceTriggered
 * @returns {Boolean | null}
 */
Input.SpaceTriggered = function() {
	var code = 32;
	return this.keyTriggered(code);
};

/**
 * @method SpaceRepeated
 * @returns {Boolean | null}
 */
Input.SpaceRepeated = function() {
	var code = 32;
	return this.keyRepeated(code);
};

/**
 * @method SpaceLongPressed
 * @returns {Boolean | null}
 */
Input.SpaceLongPressed = function() {
	var code = 32;
	return this.keyLongPressed(code);
};