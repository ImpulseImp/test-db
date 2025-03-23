"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var cables, _i, cables_1, cable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cables = [
                        {
                            name: 'Кабель NYM 3x1.5',
                            quantity: 120,
                            catalogNumber: 'E10001',
                        },
                        {
                            name: 'Кабель NYM 3x2.5',
                            quantity: 150,
                            catalogNumber: 'E10002',
                        },
                        {
                            name: 'Автоматический выключатель 10A',
                            quantity: 80,
                            catalogNumber: 'A10003',
                        },
                        {
                            name: 'Автоматический выключатель 16A',
                            quantity: 70,
                            catalogNumber: 'A10004',
                        },
                        {
                            name: 'Розетка двойная',
                            quantity: 100,
                            catalogNumber: 'R10005',
                        },
                        {
                            name: 'Выключатель одноклавишный',
                            quantity: 120,
                            catalogNumber: 'S10006',
                        },
                        {
                            name: 'Светодиодная лампа 10W',
                            quantity: 200,
                            catalogNumber: 'L10007',
                        },
                        {
                            name: 'Гофротруба 16 мм',
                            quantity: 300,
                            catalogNumber: 'G10008',
                        },
                        {
                            name: 'Коробка распределительная',
                            quantity: 80,
                            catalogNumber: 'B10009',
                        },
                        {
                            name: 'Термосадочная трубка 2:1',
                            quantity: 500,
                            catalogNumber: 'T10010',
                        },
                        {
                            name: 'Светильник накладной LED 18W',
                            quantity: 90,
                            catalogNumber: 'L10011',
                        },
                        {
                            name: 'Термостат для теплого пола',
                            quantity: 35,
                            catalogNumber: 'T10012',
                        },
                        {
                            name: 'Датчик движения',
                            quantity: 60,
                            catalogNumber: 'D10013',
                        },
                        {
                            name: 'Кабель ВВГ 2x2.5',
                            quantity: 200,
                            catalogNumber: 'E10014',
                        },
                        {
                            name: 'Разветвительная коробка IP54',
                            quantity: 40,
                            catalogNumber: 'B10015',
                        },
                        {
                            name: 'Щиток распределительный на 12 модулей',
                            quantity: 25,
                            catalogNumber: 'S10016',
                        },
                        {
                            name: 'Лампа накаливания 60W',
                            quantity: 300,
                            catalogNumber: 'L10017',
                        },
                        {
                            name: 'Кабель HDMI 1.5м',
                            quantity: 50,
                            catalogNumber: 'H10018',
                        },
                        {
                            name: 'Клеммная колодка на 12 клемм',
                            quantity: 100,
                            catalogNumber: 'C10019',
                        },
                        {
                            name: 'Светодиодная лента 5м, RGB',
                            quantity: 45,
                            catalogNumber: 'L10020',
                        },
                        {
                            name: 'Патрон для ламп E27',
                            quantity: 150,
                            catalogNumber: 'P10021',
                        },
                        {
                            name: 'Кабель USB Type-C 1м',
                            quantity: 80,
                            catalogNumber: 'U10022',
                        },
                        {
                            name: 'Заземляющий провод 2м',
                            quantity: 120,
                            catalogNumber: 'Z10023',
                        },
                        {
                            name: 'Лампа люминесцентная 36W',
                            quantity: 95,
                            catalogNumber: 'L10024',
                        },
                        {
                            name: 'Таймер включения/выключения',
                            quantity: 40,
                            catalogNumber: 'T10025',
                        },
                        {
                            name: 'Кабель ВВГ 3x4',
                            quantity: 70,
                            catalogNumber: 'E10026',
                        },
                        {
                            name: 'Стабилизатор напряжения 220В',
                            quantity: 30,
                            catalogNumber: 'S10027',
                        },
                        {
                            name: 'Розетка с USB выходом',
                            quantity: 60,
                            catalogNumber: 'R10028',
                        },
                        {
                            name: 'Термосадочная трубка 3:1',
                            quantity: 250,
                            catalogNumber: 'T10029',
                        },
                        {
                            name: 'Гофротруба 25 мм',
                            quantity: 400,
                            catalogNumber: 'G10030',
                        },
                        {
                            name: 'Датчик температуры',
                            quantity: 45,
                            catalogNumber: 'D10031',
                        },
                        {
                            name: 'Кабель Ethernet Cat5e 3м',
                            quantity: 100,
                            catalogNumber: 'E10032',
                        },
                        {
                            name: 'Модуль реле 12V',
                            quantity: 70,
                            catalogNumber: 'R10033',
                        },
                        {
                            name: 'Трансформатор 220/12V',
                            quantity: 60,
                            catalogNumber: 'T10034',
                        },
                        {
                            name: 'Шнур питания с выключателем',
                            quantity: 150,
                            catalogNumber: 'P10035',
                        },
                        {
                            name: 'Лампа энергосберегающая 15W',
                            quantity: 180,
                            catalogNumber: 'L10036',
                        },
                        {
                            name: 'Теплоизоляционная лента',
                            quantity: 300,
                            catalogNumber: 'I10037',
                        },
                        {
                            name: 'Выключатель проходной',
                            quantity: 55,
                            catalogNumber: 'S10038',
                        },
                        {
                            name: 'Розетка на три гнезда',
                            quantity: 85,
                            catalogNumber: 'R10039',
                        },
                        {
                            name: 'Светильник настольный LED',
                            quantity: 50,
                            catalogNumber: 'L10040',
                        },
                        {
                            name: 'Лампа LED GU10 7W',
                            quantity: 120,
                            catalogNumber: 'L10041',
                        },
                        {
                            name: 'Терморегулятор для радиаторов',
                            quantity: 50,
                            catalogNumber: 'T10042',
                        },
                        {
                            name: 'Разветвитель розетки на 5 гнезд',
                            quantity: 85,
                            catalogNumber: 'R10043',
                        },
                        {
                            name: 'Кабель USB Type-A 2м',
                            quantity: 70,
                            catalogNumber: 'U10044',
                        },
                        {
                            name: 'Шнур удлинительный 10м',
                            quantity: 150,
                            catalogNumber: 'E10045',
                        },
                        {
                            name: 'Держатель для проводов на стену',
                            quantity: 200,
                            catalogNumber: 'D10046',
                        },
                        {
                            name: 'Контактор 25A',
                            quantity: 40,
                            catalogNumber: 'C10047',
                        },
                        {
                            name: 'Розетка силовая 16A',
                            quantity: 95,
                            catalogNumber: 'R10048',
                        },
                        {
                            name: 'Автоматический выключатель 25A',
                            quantity: 55,
                            catalogNumber: 'A10049',
                        },
                        {
                            name: 'Светильник подвесной LED',
                            quantity: 25,
                            catalogNumber: 'L10050',
                        },
                        {
                            name: 'Светодиодная лампа GX53 6W',
                            quantity: 75,
                            catalogNumber: 'L10051',
                        },
                        {
                            name: 'Термосадочная трубка 4:1',
                            quantity: 150,
                            catalogNumber: 'T10052',
                        },
                        {
                            name: 'Кабель ВВГ 5x2.5',
                            quantity: 65,
                            catalogNumber: 'E10053',
                        },
                        {
                            name: 'Автоматический выключатель 32A',
                            quantity: 40,
                            catalogNumber: 'A10054',
                        },
                        {
                            name: 'Розетка с заземлением',
                            quantity: 125,
                            catalogNumber: 'R10055',
                        },
                        {
                            name: 'Стабилизатор напряжения 380В',
                            quantity: 30,
                            catalogNumber: 'S10056',
                        },
                        {
                            name: 'Гофротруба 32 мм',
                            quantity: 250,
                            catalogNumber: 'G10057',
                        },
                        {
                            name: 'Светильник настенный LED',
                            quantity: 90,
                            catalogNumber: 'L10058',
                        },
                        {
                            name: 'Выключатель двухклавишный',
                            quantity: 70,
                            catalogNumber: 'S10059',
                        },
                        {
                            name: 'Теплоизоляционный кожух',
                            quantity: 110,
                            catalogNumber: 'I10060',
                        },
                        {
                            name: 'Автоматический выключатель 40A',
                            quantity: 45,
                            catalogNumber: 'A10061',
                        },
                        {
                            name: 'Кабель для телевизора 5м',
                            quantity: 85,
                            catalogNumber: 'C10062',
                        },
                        {
                            name: 'Таймер для освещения',
                            quantity: 50,
                            catalogNumber: 'T10063',
                        },
                        {
                            name: 'Лампа LED E14 5W',
                            quantity: 150,
                            catalogNumber: 'L10064',
                        },
                        {
                            name: 'Розетка тройная с заземлением',
                            quantity: 70,
                            catalogNumber: 'R10065',
                        },
                        {
                            name: 'Теплоизоляционная манжета',
                            quantity: 120,
                            catalogNumber: 'I10066',
                        },
                        {
                            name: 'Светодиодный прожектор 50W',
                            quantity: 30,
                            catalogNumber: 'L10067',
                        },
                        {
                            name: 'Кабель коаксиальный 10м',
                            quantity: 65,
                            catalogNumber: 'C10068',
                        },
                        {
                            name: 'Клемма зажимная для проводов',
                            quantity: 200,
                            catalogNumber: 'K10069',
                        },
                        {
                            name: 'Выключатель с подсветкой',
                            quantity: 95,
                            catalogNumber: 'S10070',
                        },
                        {
                            name: 'Термостат для кондиционера',
                            quantity: 40,
                            catalogNumber: 'T10071',
                        },
                        {
                            name: 'Светильник потолочный LED',
                            quantity: 85,
                            catalogNumber: 'L10072',
                        },
                        {
                            name: 'Кабель для зарядки ноутбука 2м',
                            quantity: 50,
                            catalogNumber: 'C10073',
                        },
                        {
                            name: 'Розетка накладная',
                            quantity: 95,
                            catalogNumber: 'R10074',
                        },
                        {
                            name: 'Автоматический выключатель 50A',
                            quantity: 30,
                            catalogNumber: 'A10075',
                        },
                        {
                            name: 'Гофротруба 40 мм',
                            quantity: 250,
                            catalogNumber: 'G10076',
                        },
                        {
                            name: 'Патрон для ламп E14',
                            quantity: 100,
                            catalogNumber: 'P10077',
                        },
                        {
                            name: 'Кабель коаксиальный 15м',
                            quantity: 65,
                            catalogNumber: 'C10078',
                        },
                        {
                            name: 'Светодиодная лампа E27 10W',
                            quantity: 150,
                            catalogNumber: 'L10079',
                        },
                        {
                            name: 'Теплоизоляционная трубка',
                            quantity: 70,
                            catalogNumber: 'I10080',
                        },
                        {
                            name: 'Светильник трековый LED',
                            quantity: 60,
                            catalogNumber: 'L10081',
                        },
                        {
                            name: 'Кабель VGA 3м',
                            quantity: 40,
                            catalogNumber: 'C10082',
                        },
                        {
                            name: 'Выключатель сенсорный',
                            quantity: 50,
                            catalogNumber: 'S10083',
                        },
                        {
                            name: 'Гофротруба 50 мм',
                            quantity: 90,
                            catalogNumber: 'G10084',
                        },
                        {
                            name: 'Трансформатор тока',
                            quantity: 35,
                            catalogNumber: 'T10085',
                        },
                        {
                            name: 'Лампа LED E27 15W',
                            quantity: 100,
                            catalogNumber: 'L10086',
                        },
                        {
                            name: 'Патрон для ламп GX53',
                            quantity: 80,
                            catalogNumber: 'P10087',
                        },
                        {
                            name: 'Розетка с крышкой IP44',
                            quantity: 70,
                            catalogNumber: 'R10088',
                        },
                        {
                            name: 'Кабель HDMI 5м',
                            quantity: 60,
                            catalogNumber: 'H10089',
                        },
                        {
                            name: 'Светодиодный светильник аварийный',
                            quantity: 25,
                            catalogNumber: 'L10090',
                        },
                        {
                            name: 'Светодиодная панель 36W',
                            quantity: 40,
                            catalogNumber: 'L10091',
                        },
                        {
                            name: 'Кабель питания для монитора 2м',
                            quantity: 60,
                            catalogNumber: 'C10092',
                        },
                        {
                            name: 'Датчик освещенности',
                            quantity: 70,
                            catalogNumber: 'D10093',
                        },
                        {
                            name: 'Патрон для ламп MR16',
                            quantity: 80,
                            catalogNumber: 'P10094',
                        },
                        {
                            name: 'Лампа галогенная G9 20W',
                            quantity: 95,
                            catalogNumber: 'L10095',
                        },
                        {
                            name: 'Кабель HDMI 10м',
                            quantity: 55,
                            catalogNumber: 'H10096',
                        },
                        {
                            name: 'Выключатель с дистанционным управлением',
                            quantity: 35,
                            catalogNumber: 'S10097',
                        },
                        {
                            name: 'Розетка встраиваемая двойная',
                            quantity: 90,
                            catalogNumber: 'R10098',
                        },
                        {
                            name: 'Гофротруба 63 мм',
                            quantity: 120,
                            catalogNumber: 'G10099',
                        },
                        {
                            name: 'Светодиодная подсветка для шкафов',
                            quantity: 50,
                            catalogNumber: 'L10100',
                        },
                    ];
                    _i = 0, cables_1 = cables;
                    _a.label = 1;
                case 1:
                    if (!(_i < cables_1.length)) return [3 /*break*/, 4];
                    cable = cables_1[_i];
                    return [4 /*yield*/, prisma.cable.create({
                            data: cable,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log('Data seeded successfully!');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
