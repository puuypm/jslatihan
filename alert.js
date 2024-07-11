const onClickFunction = () => {
    alert("Hello World");
};

const onClickPrompt = () => {
    const name = prompt("Siapa Nama Anda?");
    alert(`Hello ${name}`);
};

const onClickLogin = () => {
    const login = confirm("Apakah Anda Ingin Login?");

    if (login) {
        const name = prompt("Siapa Nama Anda?");
        alert(`Hello ${name}`);
    }
};

for (let counter = 1; counter <= 10; counter++) {
    document.writeln(`<p>Perulangan ke ${counter}</p>`);
}