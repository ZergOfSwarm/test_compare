var langbutton = new Array();
langbutton[1] = "ID - уникальный числовой идентификатор пина. Присваивается автоматически";
langbutton[2] = "Pin - Уникальный номер цифрового или аналогового пина.";
langbutton[3] = "Pullup type - тип подтяжки:";
langbutton[4] = "Bounce interval (ms) - интервал подавления дребезга контактов (мс). Обычно 40мс достаточно.";
langbutton[5] = "Hold interval (ms) - время в мс, которое нужно удерживать кнопку, чтобы она перешла в состояние Hold (удержание).";
langbutton[6] = "Repeat - 1 или 0 - включить или выключить автоповтор нажатия в режиме удержания.";
langbutton[7] = "Repeat interval (ms) - интервал в мс, с которым повторять нажатия в режиме удержания (в поле Repeat должно быть значение 1). Обычно 150мс.";
langbutton[8] = "Double-click interval (ms) - интервал в мс, в течение которого два последовательных нажатия кнопки сгенерируют событие DoubleClick. 0 - не отслеживать двойное нажатие. Обычно 800мс.";
langbutton[9] = "Prevent Click - 1 или 0 - предотвращать(1) генерацию события Click при первом нажатии, если за ним последовал DoubleClick. Имеет смысл только если Double-click interval больше нуля.";
langbutton[10] = "Relay connection - Здесь указаны пины одного реле или несколько с которыми взаимодействует данная кнопка.";
langbutton[11] = "INFO - Укажите название данной кнопки для быстрой навигации на пример \"Кухня\", \"Детская\" и т.д. Не более 30-ти символов!";
langbutton[12] = "On/Off - \"Вкл\"\"Откл\" данный пин/выключатель.";
langbutton[13] = "Action - Возможные действия с данным пином.";

var langeditbutton = new Array();
langeditbutton[1] = "ID - уникальный числовой идентификатор пина. Присваивается автоматически";
langeditbutton[2] = "Pin - Уникальный номер цифрового или аналогового пина.";
langeditbutton[3] = "Pullup type - тип подтяжки: ";
langeditbutton[4] = "Bounce interval (ms) - интервал подавления дребезга контактов (мс). Обычно 40мс достаточно.";
langeditbutton[5] = "Hold interval (ms) - время в мс, которое нужно удерживать кнопку, чтобы она перешла в состояние Hold (удержание).";
langeditbutton[6] = "Repeat - 1 или 0 - включить или выключить автоповтор нажатия в режиме удержания.";
langeditbutton[7] = "Repeat interval (ms) - интервал в мс, с которым повторять нажатия в режиме удержания (в поле Repeat должно быть значение 1). Обычно 150мс.";
langeditbutton[8] = "Double-click interval (ms) - интервал в мс, в течение которого два последовательных нажатия кнопки сгенерируют событие DoubleClick. 0 - не отслеживать двойное нажатие. Обычно 800мс.";
langeditbutton[9] = "Prevent Click - 1 или 0 - предотвращать(1) генерацию события Click при первом нажатии, если за ним последовал DoubleClick. Имеет смысл только если Double-click interval больше нуля.";
langeditbutton[10] = "Relay connection - Здесь указаны пины одного реле или несколько с которыми взаимодействует данная кнопка.";
langeditbutton[11] = "INFO - Укажите название данной кнопки для быстрой навигации на пример \"Кухня\", \"Детская\" и т.д. Не более 30-ти символов!";
langeditbutton[12] = "On/Off - \"Вкл\"/\"Откл\" данное реле.";

var langrelay = new Array();
langrelay[1] = "ID - уникальный числовой идентификатор пина. Присваивается автоматически";
langrelay[2] = "Pin - Уникальный номер цифрового или аналогового пина.";
langrelay[3] = "PWM frequency (Hz) - частота ШИМ в герцах. Если 0 - то ШИМ не используется.";
langrelay[4] = "On - состояние выхода - 1-вкл, 0-откл.";
langrelay[5] = "Invert State - инверсия порта (Выкл - на выходе логическая 1, вкл - 0).";
langrelay[6] = "Dimmer value - если используется ШИМ - его скважность (0-255).";
langrelay[7] = "PowerOn Restore - какие параметры нужно сохранять при изменении и восстановить при включении контроллера None - ничего не сохранять, при включении состояние и значение равны установленным при конфигурировании. State - восстанавливать последнее установленное состояние параметра On. Value - восстанавливать последнее установленное значение диммера (ШИМ). State&Value - восстанавливать состояние и значение.";
langrelay[8] = "INFO - Дайте название выбранному реле для быстрой навигации на пример \"Кухня\", \"Детская\" и т.д. Не более 30-ти символов!";
langrelay[9] = "On/Off - \"Вкл\"/\"Откл\" данное реле.";
langrelay[10] = "Action - Возможные действия с данным пином.";

var langeditrelay = new Array();
langeditrelay[1] = "ID - уникальный числовой идентификатор пина. Присваивается автоматически";
langeditrelay[2] = "Pin - Уникальный номер цифрового или аналогового пина.";
langeditrelay[3] = "PWM frequency (Hz) - частота ШИМ в герцах. Если 0 - то ШИМ не используется.";
langeditrelay[4] = "ON - состояние выхода - 1-вкл, 0-откл.";
langeditrelay[5] = "Invert State - инверсия порта (Выкл - на выходе логическая 1, вкл - 0).";
langeditrelay[6] = "Dimmer value - если используется ШИМ - его скважность (0-255).";
langeditrelay[7] = "PowerOn Restore - какие параметры нужно сохранять при изменении и восстановить при включении контроллера None - ничего не сохранять, при включении состояние и значение равны установленным при конфигурировании. State - восстанавливать последнее установленное состояние параметра On. Value - восстанавливать последнее установленное значение диммера (ШИМ). State&Value - восстанавливать состояние и значение.";
langeditrelay[8] = "INFO - Дайте название выбранному реле для быстрой навигации на пример \"Кухня\", \"Детская\" и т.д. Не более 30-ти символов!";
langeditrelay[9] = "On/Off - \"Вкл\"/\"Откл\" данное реле.";

var langtimers = new Array();
langtimers[1] = "ID - уникальный числовой идентификатор cron. Присваивается автоматически.";
langtimers[2] = "Сконфигурируйте cron.";
langtimers[3] = "Какое действие должно выполниться в указанное в таймере времени.";
langtimers[4] = "INFO - Дайте название выбранному таймеру для быстрой навигации на пример \"Полив газона\", \"Свет во дворе\" и т.д. Не более 30-ти символов!";
langtimers[5] = "Action - Возможные действия с данным таймером.";

var langsettings = new Array();
langsettings[1] = "Login - Введите имя пользователя для авторизации.";
langsettings[2] = "Password - Введите пароль для авторизации.";
langsettings[3] = "Язык - Выберите язык интерфейса/подсказок.";
langsettings[4] = "Часовой пояс UTC - Выберите свой часовой пояс.";
langsettings[5] = "IP address - Введите статически IP адрес. После перезагрузки, STM32 будет доступна по введенному адресу!";
langsettings[6] = "Subnet mask - Введите маску подсети.";
langsettings[7] = "Default gateway - Введите шлюз по умолчанию.";
langsettings[8] = "MAC address - Если у вас более одного устройства то, необходимо каждому устройству указать уникальный MAC адрес.";
langsettings[9] = "Host - Введите статически IP адрес MQTT брокера.";
langsettings[10] = "Port - Укажите порт MQTT брокера.";
langsettings[11] = "Client - Укажите ID клиента.";
langsettings[12] = "User - Укажите имя пользователя.";
langsettings[13] = "Password - Введите пароль для авторизации.";
langsettings[14] = "Topic - Укажите имя топика.";
langsettings[15] = "Full Topic - Укажите полный топик.";
langsettings[16] = "QOS - Укажите уровень качества обслуживания.";
langsettings[17] = "Longitude - Округлите значение долготы до трёх знаков после запятой.";
langsettings[18] = "Latitude - Округлите значение широты до трёх знаков после запятой.";
langsettings[19] = "Sunrise - Значение времени восхода солнца установятся автоматически согласно Вашим координатам.";
langsettings[20] = "Sunset - Значение времени захода солнца установятся автоматически согласно Вашим координатам.";

var cronhelp = new Array();
cronhelp[1] = "CRON выполняется каждую секунду.";
cronhelp[2] = "CRON выполняется в начале каждой минуты.";
cronhelp[3] = "CRON выполняется каждый вторник в течение всего дня.";
cronhelp[4] = "CRON выполняется каждую минуту между 13 и 15 часами среды, четверга и пятницы.";
cronhelp[5] = "CRON выполняется каждые 5 секунд, начиная с 0.";
cronhelp[6] = "CRON выполняется каждые 5 секунд каждые 5 минут, с 00:00 до 55:55.";
cronhelp[7] = "CRON выполняется каждую пятницу в полночь.";
cronhelp[8] = "CRON выполняется каждые 2 часа в начале часа.";
cronhelp[9] = "CRON выполняется каждую секунду каждые 2 часа (0, 2, 4, ..., 22).";
cronhelp[10] = "CRON выполняется в полночь каждую неделю с понедельника по пятницу.";
cronhelp[11] = "CRON выполняется каждые 6 часов в (мин:сек) 23:15 (00:23:15, 06:23:15, 12:23:15 и т.д.).";
cronhelp[12] = "CRON выполняется в начале каждого месяца в 00:00:00.";
cronhelp[13] = "CRON выполняется в начале каждого квартала в 00:00:00.";
cronhelp[14] = "CRON выполняется в 20:15:20 каждую субботу в августе.";
cronhelp[15] = "CRON выполняется в 20:15:20 каждую субботу, которая также является 8-м днем месяца (день недели и дата должны совпадать).";
cronhelp[16] = "CRON выполняется каждую секунду между 30 и 45.";
cronhelp[17] = "CRON выполняется каждые 3 секунды в каждой минуты, когда секунды находятся между 30 и 45.";
cronhelp[18] = "CRON выполняется в начале каждой минуты, когда минуты находятся между 23 и 59.";
cronhelp[19] = "CRON выполняется каждую секунду, когда секунды находятся в диапазоне от 50 до 59 и от 00 до 10 (режим переполнения).";


var actionhelp = new Array();
actionhelp[1] = "18-й пин включится (ON) в указанное время (CRON), будет гореть в течении 5 сек. и после окончании паузы (p - PAUSE) отключится (OFF).";
actionhelp[2] = "12-й пин будет менять своё состояние (TOGGLE) каждые 5 сек.";
actionhelp[3] = "12-й пин будет менять своё состояние (TOGGLE) каждое выполнение CRON.";
