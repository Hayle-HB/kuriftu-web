import React, { useEffect, useState } from "react";
//import "./index.css";

interface CustomDateRangePickerProps {
  onSelectAvailability: (dates: {
    checkIn: Date | null;
    checkOut: Date | null;
  }) => void;
  isShow: boolean;
}

const CustomDateRangePicker: React.FC<CustomDateRangePickerProps> = ({
  onSelectAvailability,
  isShow,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(() => {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  });
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const toggleCalendar = () => setIsOpen(!isOpen);

  

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date.getTime() < startDate.getTime()) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  const renderCalendar = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const dates = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push(new Date(year, month, i));
    }

    const rows: JSX.Element[] = [];
    let cells: JSX.Element[] = [];
    let dayOffset = firstDay.getDay();

    for (let i = 0; i < dayOffset; i++) {
      cells.push(<td key={`empty-${i}`} />);
    }

    dates.forEach((date, index) => {
      const isSelected =
        (startDate && date.getTime() === startDate.getTime()) ||
        (endDate && date.getTime() === endDate.getTime()) ||
        (startDate &&
          endDate &&
          startDate.getTime() < date.getTime() &&
          date.getTime() < endDate.getTime());

      cells.push(
        <td
          key={`date-${index}`}
          className={`day ${isSelected ? "selected" : ""}`}
          onClick={() => handleDateClick(date)}
        >
          {date.getDate()}
        </td>
      );

      if ((index + dayOffset + 1) % 7 === 0 || index === dates.length - 1) {
        rows.push(<tr key={`row-${rows.length}`}>{cells}</tr>);
        cells = [];
      }
    });

    return rows;
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getNextMonth = () => {
    if (currentMonth === 11) {
      return { month: 0, year: currentYear + 1 };
    }
    return { month: currentMonth + 1, year: currentYear };
  };

  const nextMonthInfo = getNextMonth();

  const handleAvailability = () => {
    onSelectAvailability({ checkIn: startDate, checkOut: endDate });
  };

  return (
    <div className="date-range-picker date_range_picker">
      {isShow &&
      <label style={{ textAlign: "left" }}>Select Date</label>}
      <div className="d-flex gap-2 align-items-center">
        <div className="input-box date_range_picker_input_box" onClick={toggleCalendar}>
          {startDate && endDate
            ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
            : "Select Date Range"}
        </div>
        {isShow && (
          <button className="btn btn-dark" onClick={handleAvailability}>
            Check Availability
          </button>
        )}
      </div>
      {isOpen && (
        <div className="calendar-popup calendar_popup">
          <div className="calendar-header">
            <button className="btn-primary" onClick={previousMonth}>&lt;</button>
            <h4>
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "short",
              })}{" "}
              {currentYear}
            </h4>
            <h4>
              {new Date(nextMonthInfo.year, nextMonthInfo.month).toLocaleString(
                "default",
                { month: "short" }
              )}{" "}
              {nextMonthInfo.year}
            </h4>
            <button className="btn-primary" onClick={nextMonth}>&gt;</button>
          </div>
          <div className="calendar-body">
            <table>
              <thead>
                <tr>
                  <th>Su</th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                </tr>
              </thead>
              <tbody>{renderCalendar(currentMonth, currentYear)}</tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Su</th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                </tr>
              </thead>
              <tbody>
                {renderCalendar(nextMonthInfo.month, nextMonthInfo.year)}
              </tbody>
            </table>
          </div>
          <div className="calendar-footer">
            {startDate &&
              endDate &&
              `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`}
            <span></span>
            <button className="btn-primary" onClick={() => setIsOpen(false)}>Cancel</button>
            <button className="btn-primary" onClick={() => setIsOpen(false)}>Apply</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDateRangePicker;
