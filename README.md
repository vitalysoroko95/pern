![welbex](https://user-images.githubusercontent.com/61179322/176997371-424b66be-b3af-4558-9808-b9c06086b32e.png)


1. Таблица должна содержать 4 колонки:
    1. Дата
    2. Название
    3. Количество
    4. Расстояние
    
2. База данных может быть PostgreSQL
--Данные для таблицы прикрепил в sql файле в папке server--
![image](https://user-images.githubusercontent.com/61179322/177084512-29c5c295-39cf-43b9-bdc4-9a199e262c42.png)

3. Таблица должна иметь сортировку по всем полям кроме даты. Фильтрация должна быть в виде двух выпадающих списков и текстового поля:
    1. Выбор колонки, по которой будет фильтрация
    2. Выбор условия (равно, содержить, больше, меньше)
    3. Поле для ввода значения для фильтрации
--Фильтры и пагинация выполняются на клиентской части приложения--
4. Таблица должна содержать пагинацию
--Валидация выполнена без использования сторонних библиотек, при фильтре по колонке Имена можно вводить только символы, без цифр, в двух остальных только цифры. Так же добавлена кнопка сброса фильтров--


