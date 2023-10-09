const grades = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)];

console.log(grades);

const getAverage = () => {
    const sum = grades.reduce((acc, item) => acc + item, 0);
    const length = grades.length;
    return Math.round(sum / length);
};
console.log(`Средний балл: ${getAverage()}`);

const maxGrade = Math.max(...grades);
console.log(`Максимальный балл: ${maxGrade}`);

const minGrade = Math.min(...grades);
console.log(`Минимальный балл: ${minGrade}`);

const highGrade = grades.filter(grade => grade >= 60);
console.log(`Оценки выше или равны 60 баллов: ${highGrade}`);
console.log(`Количество оценок выше или равны 60 баллов: ${highGrade.length}`);

const lowGrade = grades.filter(grade => grade < 60);
console.log(`Оценки ниже 60 баллов: ${lowGrade}`);
console.log(`Количество оценок ниже 60 баллов: ${lowGrade.length}`);

grades.forEach(function (item) {
    if (item >= 80 && item <= 100) {
        console.log('A');
    } else if (item >= 60 && item <= 79) {
        console.log('B');
    } else if (item >= 40 && item <= 59) {
        console.log('C');
    } else if (item >= 20 && item <= 39) {
        console.log('D');
    } else {
        console.log('E');
    };
});
