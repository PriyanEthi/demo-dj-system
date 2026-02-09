import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = ({ onSelectDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const handleDateClick = (day) => {
        const date = new Date(year, month, day);
        setSelectedDate(date);
        onSelectDate(date); // Notify parent
    };

    const renderDays = () => {
        const daysArray = [];
        for (let i = 0; i < firstDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className="p-2" />);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            const isSelected = selectedDate && selectedDate.getDate() === i && selectedDate.getMonth() === month;
            const isToday = new Date().getDate() === i && new Date().getMonth() === month && new Date().getFullYear() === year;

            daysArray.push(
                <motion.button
                    key={i}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(147, 51, 234, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDateClick(i)}
                    className={`
                        p-3 rounded-xl flex items-center justify-center relative overflow-hidden transition-all
                        ${isSelected ? 'bg-primary text-white shadow-[0_0_20px_rgba(147,51,234,0.6)]' : 'bg-white/5 hover:bg-white/10 text-gray-300'}
                        ${isToday && !isSelected ? 'border border-primary text-primary' : ''}
                    `}
                >
                    <span className="relative z-10 font-bold">{i}</span>
                    {isSelected && (
                        <motion.div
                            layoutId="selection"
                            className="absolute inset-0 bg-primary z-0"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </motion.button>
            );
        }
        return daysArray;
    };

    return (
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
                <button onClick={handlePrevMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors"><ChevronLeft className="text-white" /></button>
                <h2 className="text-xl font-bold text-white">
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <button onClick={handleNextMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors"><ChevronRight className="text-white" /></button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2 text-center text-sm font-medium text-gray-500 uppercase tracking-wide">
                {days.map(day => <div key={day}>{day}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {renderDays()}
            </div>
        </div>
    );
};

export default Calendar;
