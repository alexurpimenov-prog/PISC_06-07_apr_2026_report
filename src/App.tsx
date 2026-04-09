import React, { useState } from 'react';
import { 
  Beaker, 
  CheckCircle2, 
  Info, 
  Layers, 
  Microscope, 
  AlertTriangle, 
  FileText, 
  Dna, 
  Activity,
  Award,
  ChevronDown,
  ChevronUp,
  Mail,
  ArrowRight,
  BarChart3,
  Image as ImageIcon
} from 'lucide-react';
import { motion } from 'motion/react';

const Section = ({ title, icon: Icon, children, className = "" }: { title: string, icon: any, children: React.ReactNode, className?: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 md:p-8 mb-8 ${className}`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-bold text-emerald-900">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const InfoCard = ({ label, value, description }: { label: string, value: string, description?: string }) => (
  <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
    <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">{label}</div>
    <div className="text-lg font-bold text-emerald-900">{value}</div>
    {description && <div className="text-sm text-emerald-700 mt-1">{description}</div>}
  </div>
);

const SubSection = ({ title, icon: Icon, children, className = "" }: { title: string, icon: any, children: React.ReactNode, className?: string }) => (
  <div className={`mb-12 ${className}`}>
    <div className="flex items-center gap-3 mb-4 border-b border-emerald-100 pb-2">
      <div className="text-emerald-600">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-bold text-emerald-800">{title}</h3>
    </div>
    {children}
  </div>
);

const ActionBlock = ({ text }: { text: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="bg-emerald-50 border-l-4 border-emerald-400 p-4 mb-6 rounded-r-xl flex items-center gap-3"
  >
    <div className="bg-emerald-400 p-1 rounded-full text-white">
      <ArrowRight size={16} />
    </div>
    <p className="text-emerald-900 font-medium">{text}</p>
  </motion.div>
);

const HeaderBlock = ({ text, imageUrl }: { text: string, imageUrl?: string }) => (
  <div className="mt-12 mb-8 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
    <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
      <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-2">
        <BarChart3 size={18} className="text-emerald-600" />
        {text}
      </h4>
    </div>
    <div className="bg-slate-100/30 flex flex-col items-center justify-center text-slate-400 border-b border-slate-100 overflow-hidden">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={text} 
          className="w-full h-auto max-h-[500px] object-contain"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="h-72 flex flex-col items-center justify-center">
          <ImageIcon size={48} strokeWidth={1} className="opacity-50" />
          <span className="text-xs mt-4 uppercase tracking-widest font-medium">Место для графика из Q-Analyzer</span>
        </div>
      )}
    </div>
  </div>
);

export default function App() {
  const [showSupport, setShowSupport] = useState(false);
  const [showPdfMenu, setShowPdfMenu] = useState(false);

  const pdfReports = [
    { name: "Lib Celemics before pooling", file: "/Lib_Celemics_before_pooling.pdf" },
    { name: "Lib Celemics after pooling", file: "/Lib_Celemics_after_pooling.pdf" },
    { name: "Lib Celemics after pooling after baseline adjustments", file: "/Lib_Celemics_after_pooling_after_baseline_adjustments.pdf" }
  ];

  const manuals = [
    { name: "LP", file: "/Celemics_LP_Illumina_DNA_ep_short_CD,UD_NormalizeX_bead pooling_enhanced.pdf" },
    { name: "TE", file: "/Celemics_TE_Illumina_DNA_ep_short_CD,UD_NormalizeX_bead pooling_enhanced.pdf" }
  ];

  const [showManualsMenu, setShowManualsMenu] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <header className="bg-emerald-900 text-white py-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-emerald-300 font-semibold mb-4"
          >
            <Microscope size={20} />
            <span>ООО «БиоЛайн» | Школа NGS (PISC)</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Отчет по результатам мастер-класса
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-100 text-lg max-w-2xl leading-relaxed"
          >
            МКНЦ им. А.С. Логинова. Подготовка библиотек для полноэкзомного секвенирования (WES).
          </motion.p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12">
        {/* Welcome Message */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-8 border-emerald-500"
        >
          <h3 className="text-xl font-bold text-emerald-900 mb-4">Уважаемые коллеги!</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Благодарим Вас за участие в Школе NGS. С вами было очень приятно работать. 
            Спасибо за дружескую атмосферу, интересные вопросы и невероятную внимательность в течение всех двух дней.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Ниже представлено описание первых результатов: характеристики подготовленной библиотеки для дальнейшего секвенирования.
          </p>
        </motion.div>

        {/* Kit Details */}
        <Section title="Используемый набор: CELEMICS All-in-One" icon={Beaker}>
          <div className="bg-emerald-900 text-white p-6 rounded-xl mb-8">
            <div className="text-sm text-emerald-300 font-mono mb-2">Full Specification:</div>
            <div className="text-lg font-bold leading-tight">
              All-in-One (LP+TC+Acc.), Whole Exome (WES), 16 samples, 4-Plex, DNA, Illumina, Enzymatic Fragmentation (EP), Unique Dual Index, Short Adapter, Enhanced
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="font-bold text-emerald-600 min-w-[80px]">All-in-One</div>
                <div className="text-sm text-slate-600">Набор «все включено»: реагенты для фрагментации, лигирования, очисток, ПЦР и гибридизации.</div>
              </div>
              <div className="flex gap-3">
                <div className="font-bold text-emerald-600 min-w-[80px]">LP / TE</div>
                <div className="text-sm text-slate-600">LP — приготовление библиотек; TE — зонды и реагенты для гибридизации.</div>
              </div>
              <div className="flex gap-3">
                <div className="font-bold text-emerald-600 min-w-[80px]">WES</div>
                <div className="text-sm text-slate-600">Полный экзом (без mtDNA).</div>
              </div>
              <div className="flex gap-3">
                <div className="font-bold text-emerald-600 min-w-[80px]">16 samples</div>
                <div className="text-sm text-slate-600">Реагенты LP модуля на 16 индивидуальных образцов.</div>
              </div>
            </div>
            <div className="space-y-4 border-l border-emerald-100 md:pl-6">
              <div className="flex gap-3">
                <div className="font-bold text-emerald-600 min-w-[80px]">4-Plex</div>
                <div className="text-sm text-slate-600">Смешивание по 4 образца перед гибридизацией (всего 4 реакции гибридизации).</div>
              </div>
              <div className="flex gap-3">
                <div className="font-bold text-emerald-600 min-w-[80px]">EP</div>
                <div className="text-sm text-slate-600">Ферментативная фрагментация ДНК.</div>
              </div>
              <div className="flex gap-3">
                <div className="font-bold text-emerald-600 min-w-[80px]">Enhanced</div>
                <div className="text-sm text-slate-600">Ускоренная гибридизация (от 3 часов).</div>
              </div>
              <div className="flex gap-3">
                <div className="font-bold text-emerald-600 min-w-[80px]">UDI</div>
                <div className="text-sm text-slate-600">Unique Dual Index — самый актуальный тип индексирования.</div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100 flex gap-3">
            <Info className="text-amber-600 shrink-0" size={20} />
            <p className="text-sm text-amber-800 italic">
              Важно: Мы использовали протокол очистки на магнитных частицах (вместо вакуумного концентратора).
            </p>
          </div>
        </Section>

        {/* Analysis Results */}
        <Section title="Результаты анализа" icon={Activity}>
          <ActionBlock text="Что делаем: готовим библиотеки из 4 образцов для последующего пулирования по 4 в 1 пул и гибридизации, измеряем концентрацию, и фрагментный профиль для каждого образца индивидуально" />
          
          {/* Stage 1 */}
          <SubSection title="ЭТАП 1. Оценка индивидуальных библиотек после пре-ПЦР перед пулированием (Pre-Capture)" icon={Layers}>
            <p className="text-slate-600 mb-6">
              Анализ 4 независимых библиотек (lib5, lib1#, lib1, lib2) перед объединением в пул.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2 space-y-4">
                <div className="bg-white border border-emerald-100 rounded-xl p-5 flex gap-4 items-start shadow-sm">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-1">Чистота (Победа над димерами)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Линия в зоне 120-140 bp идет строго по базовой линии. Очистка на магнитных частицах выполнена безупречно.
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-emerald-100 rounded-xl p-5 flex gap-4 items-start shadow-sm">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-1">Форма и размер вставок</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Правильная колоколообразная форма. Отсутствие "баббл-эффекта" (вторичных горбов).
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-500 uppercase mb-3 flex items-center gap-2">
                  <Activity size={14} /> Концентрации (Qubit)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-500 border-b border-slate-200">
                        <th className="pb-2 font-semibold">Образец</th>
                        <th className="pb-2 font-semibold">нг/мкл</th>
                        <th className="pb-2 font-semibold">Итого в 30 мкл</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-2 text-slate-600">lib1#</td>
                        <td className="py-2 font-mono font-bold text-emerald-700">4.9</td>
                        <td className="py-2 font-mono text-slate-500">~147 нг</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-slate-600">lib1</td>
                        <td className="py-2 font-mono font-bold text-emerald-700">3.6</td>
                        <td className="py-2 font-mono text-slate-500">~108 нг</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-slate-600">lib5</td>
                        <td className="py-2 font-mono font-bold text-emerald-700">2.36</td>
                        <td className="py-2 font-mono text-slate-500">~70 нг</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-slate-600">lib2</td>
                        <td className="py-2 font-mono font-bold text-emerald-700">5.82</td>
                        <td className="py-2 font-mono text-slate-500">~175 нг</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                <AlertTriangle size={18} className="text-emerald-600" /> 
                Практический вывод по пулированию
              </h4>
              <p className="text-sm text-emerald-800 leading-relaxed mb-4">
                Разница в высоте пиков доказывает: <strong>нельзя пулировать "на глаз"</strong>. 
                Необходимо выравнивание концентраций, чтобы каждый образец внес равную массу ДНК.
              </p>
              <div className="text-xs text-emerald-600 italic">
                * В рамках практикума выравнивание не проводилось для экономии времени.
              </div>
            </div>

            <HeaderBlock 
              text="Фрагментный профиль образцов" 
              imageUrl="/1.png" 
            />
          </SubSection>

          <ActionBlock text="Что делаем: объединяем 4 образца в 1 пул, концентрируем на частицах, проводим гибридизацию, отмывки и пост-ПЦР, и измеряем концентрацию, и фрагментный профиль готовой библиотеки" />

          {/* Stage 2 */}
          <SubSection title="ЭТАП 2. Оценка готового пула (Post-Capture)" icon={Award}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <InfoCard label="Вершина пика" value="513 bp" />
              <InfoCard label="Средний размер" value="475 bp" />
              <InfoCard label="Полезная вставка" value="~335 bp" description="Идеально для Illumina" />
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-emerald-100 rounded-xl p-5 flex gap-4 items-start shadow-sm">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-emerald-900 mb-1">Абсолютное отсутствие димеров</h4>
                  <p className="text-sm text-slate-600">
                    В диапазоне 100-200 bp всего 0.2% ДНК. Блокиратор (Blocking Reagent) отработал на 100%, 
                    мусор полностью смыт Wash-буферами.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-emerald-100 rounded-xl p-5 flex gap-4 items-start shadow-sm">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-emerald-900 mb-1">Идеальный баланс ПЦР</h4>
                  <p className="text-sm text-slate-600">
                    Гладкий правый край фореза (700-1000+ bp) без вторичных горбов. 
                    Количество циклов пост-кэпчур ПЦР подобрано идеально, переамплификации нет.
                  </p>
                </div>
              </div>
            </div>

            <HeaderBlock 
              text="Фрагментный профиль итоговой библиотеки без корректировки настроек базовой линии Qsep" 
              imageUrl="/2.png"
            />
          </SubSection>
        </Section>

        {/* Nuances */}
        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-emerald-900 flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
              <Activity size={24} />
            </div>
            Работа с Qsep
          </h2>
        </div>
        <Section title="Нюансы измерения: Перегруз детектора" icon={Info} className="bg-slate-50 border-slate-200">
          <div className="space-y-8">
            {/* Point 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2 text-lg">
                🎯 1. Проблема соотношения Пика и Маркера
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Пик библиотеки (~28 RFU) выше верхнего маркера 1000 bp (~25 RFU). В системах капиллярного электрофореза (Qsep, Bioanalyzer, TapeStation) нижний и верхний маркеры выполняют роль внутренних стандартов. Прибор знает их точную концентрацию. Если сигнал вашего образца перекрывает сигнал маркера, вы выходите за пределы линейного динамического диапазона детектора.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2 text-lg">
                🎯 2. Природа странной нижней линии (Baseline / Threshold)
              </h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Из-за того, что в капилляр зашел гигантский объем ДНК, интеркалирующего красителя связалось слишком много.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100">
                  <h5 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Засвет (Bleed-through)
                  </h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Когда этот огромный сгусток ДНК проходит через лазер, он дает такой мощный всплеск флуоресценции, что возникает оптический засвет (background fluorescence ползет вверх вместе с пиком).
                  </p>
                </div>
                <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100">
                  <h5 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Реакция софта
                  </h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Программа Q-Analyzer видит, что фон ненормально растет. Её математический алгоритм пытается нарисовать динамическую базовую линию (dynamic baseline / threshold) прямо под пиком. Именно поэтому эта линия (коричневая) идеально повторяет контур библиотеки — софт пытается «отрезать» избыточное свечение снизу.
                  </p>
                </div>
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-emerald-900 text-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-bold mb-6 flex items-center gap-2 text-xl">
                🎯 3. Правильное решение
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-emerald-800/50 p-5 rounded-xl border border-emerald-700">
                    <h5 className="font-bold text-emerald-300 mb-2">Вариант 1 — Разведение</h5>
                    <p className="text-sm text-emerald-50 leading-relaxed mb-4">
                      Для получения идеального, ровного графика без математических артефактов софта, концентрация библиотеки в лунке прибора должна быть около <strong>5–10 нг/мкл</strong> (а для некоторых высокочувствительных картриджей даже 1–5 нг/мкл).
                    </p>
                    <div className="text-xs text-emerald-300 mb-4 italic">Наши концентрации:</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between border-b border-emerald-700 pb-1">
                        <span>Прибор Qsep:</span>
                        <span className="font-bold text-emerald-300">&gt;15 нг/мкл</span>
                      </div>
                      <div className="flex justify-between border-b border-emerald-700 pb-1">
                        <span>Qubit (точный):</span>
                        <span className="font-bold text-emerald-300">25.7 нг/мкл</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="bg-emerald-800/50 p-5 rounded-xl border border-emerald-700">
                    <h5 className="font-bold text-emerald-300 mb-2">Вариант 2 — Корректировка</h5>
                    <p className="text-sm text-emerald-50 leading-relaxed">
                      Корректировка параметров базовой линии (см. ниже график со скорректированными параметрами базовой линии и в ПДФ отчете "Lib Celemics after pooling Корректировка настроек").
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-emerald-300 text-sm italic">
                    <Info size={16} />
                    <span>Это еще раз подтверждает перегрузку детектора.</span>
                  </div>
                </div>
              </div>
            </div>

            <HeaderBlock 
              text="Фрагментный профиль итоговой библиотеки после корректировки настроек базовой линии Qsep" 
              imageUrl="/3.png"
            />
          </div>
        </Section>

        {/* Final Summary Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-emerald-200"
        >
          <div className="inline-flex p-4 bg-emerald-500 rounded-2xl mb-6">
            <Award size={48} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ИТОГ: УСПЕХ!</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Библиотеки 4 пациентов успешно обогащены, пул идеально чист. 
            Можно смело считать молярность, денатурировать и заливать в секвенатор!
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative">
            <div className="relative">
              <button 
                onClick={() => setShowPdfMenu(!showPdfMenu)}
                className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-50 transition-colors"
              >
                <FileText size={20} /> ПДФ Отчеты
                {showPdfMenu ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              
              {showPdfMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full mb-2 left-0 right-0 md:left-auto md:w-80 bg-white rounded-xl shadow-2xl border border-emerald-100 overflow-hidden z-50"
                >
                  {pdfReports.map((report, idx) => (
                    <a
                      key={idx}
                      href={report.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 border-b border-slate-100 last:border-0 transition-colors"
                    >
                      {report.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowManualsMenu(!showManualsMenu)}
                className="bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-800 transition-colors"
              >
                <Dna size={20} /> Мануалы Celemics
                {showManualsMenu ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {showManualsMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full mb-2 left-0 right-0 md:left-auto md:w-48 bg-white rounded-xl shadow-2xl border border-emerald-100 overflow-hidden z-50"
                >
                  {manuals.map((manual, idx) => (
                    <a
                      key={idx}
                      href={manual.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-4 py-3 text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 border-b border-slate-100 last:border-0 transition-colors"
                    >
                      {manual.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="mt-20 py-12 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-sm">© 2026 ООО «БиоЛайн». Все права защищены.</p>
        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="flex justify-center gap-6 text-emerald-600 font-semibold">
            <a href="https://bioline.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">bioline.ru</a>
            <button 
              onClick={() => setShowSupport(!showSupport)}
              className="flex items-center gap-1 hover:text-emerald-700 transition-colors"
            >
              Поддержка {showSupport ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
          
          {showSupport && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <Mail size={14} className="text-emerald-500" />
                <a href="mailto:main@bioline.ru" className="hover:text-emerald-700">main@bioline.ru</a>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <Mail size={14} className="text-emerald-500" />
                <a href="mailto:pimenov@bioline.ru" className="hover:text-emerald-700">pimenov@bioline.ru</a>
              </div>
            </motion.div>
          )}
        </div>
      </footer>
    </div>
  );
}
