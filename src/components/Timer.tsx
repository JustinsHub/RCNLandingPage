import React from 'react'
interface TimerProps {
    date: any
}

const Timer:React.FC<TimerProps> = ({date}) => {

    const birthday = new Date(date);
    const currentDate = new Date(Date.now());

    const birthdayMonth = birthday.getMonth();
    const birthdayDay = birthday.getDate();

    const nextBirthday = new Date(currentDate.getFullYear(), birthdayMonth, birthdayDay).getTime() < currentDate.getTime()
    ? new Date(currentDate.getFullYear() + 1, birthdayMonth, birthdayDay)
    : new Date(currentDate.getFullYear(), birthdayMonth, birthdayDay);

    let remainingTimes = nextBirthday.getTime() - currentDate.getTime();

    const remainingMonths = Math.floor((remainingTimes / 1000) / (60 * 60 * 24 * 30));

    remainingTimes -= remainingMonths * (60 * 60 * 24 * 30 * 1000);

    const remainingDays = Math.floor((remainingTimes / 1000) / (60 * 60 * 24));
    
    return (
        <section>   
            <div>
                {remainingMonths} months and {remainingDays} days until athletes birthday!
            </div>
        </section>
    )
}

export default Timer