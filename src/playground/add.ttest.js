const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add 2 numbers', () => {
    const result = add(3, 4);
/* 
    if (result !== 7) {
        throw new Error(`You added 4 and 3, the result was ${result}. Expected 7`)
    } */
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    const greeting = generateGreeting('Dave');
    expect(greeting).toBe('Hello Dave!')
})
test('should generate greeting for no name', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!')
})