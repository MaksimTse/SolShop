describe('E-commerce Full Flow', () => {
    before(() => {
        cy.viewport(1920, 1080); // Устанавливаем разрешение экрана
    });

    const user = {
        name: `User${Math.floor(Math.random() * 10000)}`, // Уникальное имя пользователя
        email: `user${Math.floor(Math.random() * 10000)}@test.com`, // Уникальный email
        password: 'test123' // Простой пароль
    };

    it('Register, Login, Add Products to Cart and Checkout', () => {
        // Переход на сайт
        cy.visit('https://maksimtsepelevits22.thkit.ee/SolShop/index.php');
        cy.wait(1000);

        // === Регистрация пользователя ===
        cy.get('.slide-controls > .signup').click();
        cy.get('.signup > :nth-child(1) > input').type(user.name); // Имя пользователя
        cy.get('.signup > :nth-child(2) > input').type(user.email); // Email
        cy.get('.signup > :nth-child(3) > input').type(user.password); // Пароль
        cy.get('.signup > .btn > input').click();

        // Проверка успешной регистрации
        cy.get('.login').should('be.visible');

        // === Вход в аккаунт ===
        cy.get('.login > :nth-child(1) > input').type(user.email); // Email
        cy.get('.login > :nth-child(2) > input').type(user.password); // Пароль
        cy.get('.login > .btn > input').click();

        // Проверка успешного входа
        cy.get('.cart-container').should('be.visible');

        // === Добавление случайных товаров в корзину ===
        cy.get('.shelf').should('have.length.greaterThan', 0).then((products) => {
            const randomProducts = Cypress._.sampleSize(products.toArray(), 2); // Случайные 2 товара
            randomProducts.forEach((product) => {
                cy.wrap(product).find('.add-to-cart-btn').click(); // Клик по кнопке "Добавить в корзину"
            });
        });

        // Проверка изменения суммы в корзине
        cy.get('.cart-container').contains('€').should('not.contain.text', '€0.00');

        // === Оформление заказа ===
        cy.get('.cart-container').click();

        // Переход к оплате
        cy.window().then((win) => {
            win.location.href = 'https://maksimtsepelevits22.thkit.ee/SolShop/checkout.php';
        });

        // Заполнение данных для оплаты
        cy.get('#card-number').type('4111111111111111'); // Номер карты
        cy.get('#card-cvc').type('123'); // CVV-код
        cy.get('#cardholder-name').type(user.name); // Имя владельца карты
        cy.get('#expiration-month').select('12'); // Месяц истечения
        cy.get('#expiration-year').select('2025'); // Год истечения

        // Заполнение адреса доставки
        cy.get('.additional-info .form-field input').type('Test Address'); // Адрес доставки

        // Подтверждение заказа
        cy.get('.btn-submit').click();
    });
});
