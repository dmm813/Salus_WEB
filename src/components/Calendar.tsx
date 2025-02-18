import './Calendar.scss'
import { useState } from "react";

const getMonthName = (monthIndex: number): string => {
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return months[monthIndex];
};

const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate(); // Último dia do mês
};

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  // Função para voltar o mês
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  // Gerar os dias do calendário
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const days = Array.from({ length: firstDayOfMonth }).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <div id="calendar" style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2>
        {getMonthName(currentMonth)} {currentYear}
      </h2>
      <div>
        <button onClick={prevMonth}>← Anterior</button>
        <button onClick={nextMonth}>Próximo →</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px", marginTop: "10px" }}>
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((day) => (
          <div key={day} style={{ fontWeight: "bold" }}>
            {day}
          </div>
        ))}
        {days.map((day, index) =>
          day === null ? (
            <div key={index} style={{ visibility: "hidden" }}>0</div>
          ) : (
            <div key={index} style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}>
              {day}
            </div>
          )
        )}
      </div>
    </div>
  );
};