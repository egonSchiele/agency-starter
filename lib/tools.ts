export function fib(x: number): number {
    if (x <= 1) return x;
    return fib(x - 1) + fib(x - 2);
}

export function searchBQ(query: string): string[] {
    return [`Result 1 for ${query}`, `Result 2 for ${query}`, `Result 3 for ${query}`];
}