function print10(n) {
    console.log(n);
    if (n < 10)
        print10(n + 1);
}

print10(1);
