import { useEffect } from 'react';

const useLastDayClassName = dependencies => {
  useEffect(() => {
    const tables = Array.from(document.querySelectorAll('.CalendarMonth_table'));

    if (tables) {
      tables.forEach(table => {
        const allTds = Array.from(table.querySelectorAll('td'));

        // quick return last day
        const day31 = allTds.find(td => td.textContent === '31');
        if (day31) {
          day31.classList.add('__last-day-of-month__');
          return;
        }

        const day30 = allTds.find(td => td.textContent === '30');
        if (day30) {
          day30.classList.add('__last-day-of-month__');
          return;
        }

        const day29 = allTds.find(td => td.textContent === '29');
        if (day29) {
          day29.classList.add('__last-day-of-month__');
          return;
        }

        const day28 = allTds.find(td => td.textContent === '28');
        if (day28) {
          day28.classList.add('__last-day-of-month__');
        }
      });
    }
  }, [dependencies]);
};

export default useLastDayClassName;
