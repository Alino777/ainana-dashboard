import { useState } from "react";
import { motion } from "framer-motion";
import 'react-calendar/dist/Calendar.css';
import {
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, Legend, PieChart, Pie, Cell
} from 'recharts';

export default function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const user = { name: "Giovanna" };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState({});
  const [newAppt, setNewAppt] = useState("");
  const [weekOffset, setWeekOffset] = useState(0);

  const tabs = [
    { key: "dashboard", label: "Dashboard" },
    { key: "dieta", label: "Diete" },
    { key: "consigli", label: "Consigli" },
    { key: "client", label: "Client management" },
  ];

  function getWeekDays(baseDate = new Date(), offset = 0) {
    const start = new Date(baseDate);
    start.setDate(start.getDate() + offset * 7);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    const days = [];
    for (let i = 0; i < 5; i++) {
      const d = new Date(start);
      d.setDate(diff + i);
      days.push({
        label: d.toLocaleDateString("it-IT", { weekday: "short" }),
        date: new Date(d),
      });
    }
    return days;
  }

  const ageData = [
    { group: '13-18', value: 30 },
    { group: '19-25', value: 80 },
    { group: '26-30', value: 50 },
    { group: '31-40', value: 70 },
    { group: '<40', value: 40 },
  ];

  const visitsData = Array.from({ length: 14 }, (_, i) => ({
    day: `G${i + 1}`,
    prime: Math.floor(Math.random() * 50 + 50),
    check: Math.floor(Math.random() * 50),
  }));

  const pieData = [
    { name: 'Empatico', value: 400 },
    { name: 'Motivazionale', value: 200 },
    { name: 'Funzionale', value: 200 },
  ];

  const adherenceData = [
    { day: 'L', value: 60 },
    { day: 'M', value: 80 },
    { day: 'M', value: 40 },
    { day: 'G', value: 90 },
    { day: 'V', value: 75 },
    { day: 'S', value: 90 },
    { day: 'D', value: 60 },
  ];

  const COLORS = ['#FFCE00', '#FF9F1C', '#3FA9F5'];

  return (
    <div className="min-h-screen bg-[#fffceb] font-sans text-[#333] p-4">
      <nav className="flex justify-between items-center mb-6 px-6">
        <div className="flex items-center">
          <img src="/logo.png" alt="Ainana logo" className="h-8 w-auto" />
        </div>
        <div className="relative bg-[#fff4cc] rounded-full px-2 py-1 flex gap-2 shadow-md ml-8">
          <div className="relative flex">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveSection(tab.key)}
                className={`relative z-10 px-4 py-2 font-medium rounded-full transition-all ${activeSection === tab.key ? "text-black" : "text-gray-600"}`}
              >
                {tab.label}
                {activeSection === tab.key && (
                  <motion.div
                    layoutId="underline"
                    className="absolute inset-0 bg-yellow-400 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">🔔</div>
      </nav>
    </div>
  );
}


<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">🔔</div>
</nav>
          <><div className="bg-white rounded-2xl p-4 shadow">
    <h2 className="text-lg font-semibold mb-4">Calendario</h2>
    <div className="flex justify-between items-center mb-2">
      <button onClick={() => setWeekOffset((prev) => prev - 1)} className="text-xl px-2">←</button>
      <h2 className="text-lg font-semibold">
        {getWeekDays(selectedDate, weekOffset)[0].date.toLocaleDateString("it-IT", { month: "long", year: "numeric" })}
      </h2>
      <button onClick={() => setWeekOffset((prev) => prev + 1)} className="text-xl px-2">→</button>
    </div>
    <div className="flex gap-2 mb-4">
      {getWeekDays(selectedDate, weekOffset).map((d) => {
        const isActive = d.date.toDateString() === selectedDate.toDateString();
        return (
          <button key={d.date.toISOString()} onClick={() => setSelectedDate(d.date)}
            className={ } />);
      })}\`px-3 py-2 rounded-xl font-medium text-sm text-center w-14 \${isActive ? "bg-yellow-400 text-white" : "bg-gray-100 text-gray-700"}\`}>
      <div className="capitalize">{d.label}</div>
      <div>{d.date.getDate()}</div>
    </button>
    );
    })}
  </div><h3 className="font-semibold text-sm mb-2">Appuntamenti per il {selectedDate.toLocaleDateString("it-IT")}</h3><div className="flex flex-col gap-2 mb-2">
      {(appointments[selectedDate.toDateString()] || []).map((appt, i) => (
        <div key={i} className="text-sm flex justify-between items-center bg-gray-100 px-2 py-1 rounded">
          <span>• {appt}</span>
          <button onClick={() => {
            const key = selectedDate.toDateString();
            setAppointments((prev) => ({ ...prev, [key]: prev[key].filter((_, index) => index !== i) }));
          } } className="text-xs text-red-500 hover:text-red-700 ml-2">✕</button>
        </div>
      ))}
    </div><form onSubmit={(e) => {
      e.preventDefault();
      if (!newAppt.trim()) return;
      setAppointments((prev) => {
        const key = selectedDate.toDateString();
        const current = prev[key] || [];
        return { ...prev, [key]: [...current, newAppt] };
      });
      setNewAppt("");
    } } className="flex gap-2 items-center">
      <div className="relative w-full">
        <input type="text" value={newAppt} onChange={(e) => setNewAppt(e.target.value)} placeholder="Nuovo appuntamento"
          className="w-full px-3 py-1 pr-8 rounded border text-sm" />
      </div>
      <button type="submit" className="bg-yellow-400 text-white px-3 py-1 rounded text-sm">Aggiungi</button>
    </form><div className="mt-4">
      <h3 className="font-semibold mb-1">Ultime ricette caricate</h3>
      <div className="bg-gray-100 p-2 rounded mb-1">Pokè di quinoa, ceci e verdure</div>
      <div className="bg-gray-100 p-2 rounded mb-1">Salmone scottato con limone</div>
      <button className="bg-yellow-400 px-4 py-2 rounded mt-2 w-full">Vai alle ricette</button>
    </div></>
          </div>
        </div>

        {/* Colonna destra */}
        <div className="col-span-3">
          {/* Box metriche */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <><div className="bg-yellow-100 rounded-2xl p-4 shadow">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <div>
                  <h3 className="font-bold text-lg">800</h3>
                  <p className="text-sm">Contatti</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">+20 lead</p>
            </div><div className="bg-yellow-100 rounded-2xl p-4 shadow">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👁️</span>
                  <div>
                    <h3 className="font-bold text-lg">10 mila</h3>
                    <p className="text-sm">Visualizzazioni</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">+1000 views</p>
              </div><div className="bg-yellow-100 rounded-2xl p-4 shadow">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">❤️</span>
                  <div>
                    <h3 className="font-bold text-lg">200</h3>
                    <p className="text-sm">Apprezzamenti</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">+20 like</p>
              </div></>
          </div>

          {/* Contenitore grafici */}
          <div className="bg-white rounded-2xl p-6 shadow grid grid-cols-3 gap-4">
            <><div>
              <h3 className="font-bold mb-2">Media età</h3>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={ageData}><XAxis dataKey="group" /><Tooltip /><Bar dataKey="value" fill="#FFB400" radius={[4, 4, 0, 0]} /></BarChart>
              </ResponsiveContainer>
            </div><div>
                <h3 className="font-bold mb-2">Prime visita VS check</h3>
                <ResponsiveContainer width="100%" height={180}>
                  <AreaChart data={visitsData}>
                    <defs>
                      <linearGradient id="colorPrime" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3FA9F5" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#3FA9F5" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorCheck" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF9F1C" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#FF9F1C" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" />
                    <Tooltip />
                    <Area type="monotone" dataKey="prime" stroke="#3FA9F5" fill="url(#colorPrime)" />
                    <Area type="monotone" dataKey="check" stroke="#FF9F1C" fill="url(#colorCheck)" />
                    <Legend />
                  </AreaChart>
                </ResponsiveContainer>
              </div><div>
                <h3 className="font-bold mb-2">Giugno 2025</h3>
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Tooltip />
                    <Pie data={pieData} innerRadius={50} outerRadius={70} fill="#8884d8" dataKey="value" label>
                      {pieData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-sm mt-2 text-center">400 contatti hanno scelto un approccio empatico</p>
              </div><div className="col-span-3 mt-4">
                <h3 className="font-bold mb-2">Adesione piani alimentari</h3>
                <p className="text-sm text-red-600 mb-2">Molti utenti preferiscono sgarrare il sabato</p>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={adherenceData}>
                    <XAxis dataKey="day" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#FFCE00" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div></>
          </div>
        </div>
      </div>
    </div>
  );
}
