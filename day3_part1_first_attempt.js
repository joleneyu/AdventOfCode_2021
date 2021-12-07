const list = [0b00100
,0b11110
,0b10110
,0b10111
,0b10101
,0b01111
,0b00111
,0b11100
,0b10000
,0b11001
,0b00010
,0b01010]

// const test = list2[0].toString(2)
// let new_test = "00".concat(test)
// console.log(typeof test)
// console.log(test)
// console.log(new_test)
// console.log(typeof new_test)

let new_str_list = []
for (let i = 0; i < list.length; i++) {
    let str = list[i].toString(2);
    if (str.length == 1) {
        let new_str = "0000".concat(str)
        new_str_list[i] = new_str
    } else if (str.length == 2) {
        let new_str = "000".concat(str)
        new_str_list[i] = new_str
    } else if (str.length == 3) {
        let new_str = "00".concat(str)
        new_str_list[i] = new_str
    } else if (str.length == 4) {
        let new_str = "0".concat(str)
        new_str_list[i] = new_str
    } else {
        let new_str = str
        new_str_list[i] = new_str
    }
}

console.log(new_str_list)

function gamma_rate (list) {
    let first_bit_count_0 = 0;
    let first_bit_count_1 = 0;
    let second_bit_count_0 = 0;
    let second_bit_count_1 = 0;
    let third_bit_count_0 = 0;
    let fouth_bit_count_0 = 0;
    let fifth_bit_count_0 = 0;
    let third_bit_count_1 = 0;
    let fouth_bit_count_1 = 0;
    let fifth_bit_count_1 = 0;
    for (let i = 0; i < list.length; i++) {
        let first_bit = list[i].slice(0, 1)
        let sec_bit = list[i].slice(1, 2)
        let thi_bit = list[i].slice(2, 3)
        let four_bit = list[i].slice(3, 4)
        let fifth_bit = list[i].slice(4, 5)
        console.log(first_bit)
        if (first_bit == "0") {
            first_bit_count_0 += 1
        } else {
            first_bit_count_1 += 1
        }
        if (sec_bit == "0") {
            second_bit_count_0 += 1
        } else {
            second_bit_count_1 += 1
        }
        if (thi_bit == "0") {
            third_bit_count_0 += 1
        } else {
            third_bit_count_1 += 1
        }
        if (four_bit == "0") {
            fouth_bit_count_0 += 1
        } else {
            fouth_bit_count_1 += 1
        }
        if (fifth_bit == "0") {
            fifth_bit_count_0 += 1
        } else {
            fifth_bit_count_1 += 1
        }
    }
    console.log(first_bit_count_0, first_bit_count_1)
    console.log(second_bit_count_0, fifth_bit_count_1)
    console.log(third_bit_count_0, third_bit_count_1)
    console.log(fouth_bit_count_0,fouth_bit_count_1)
    console.log(fifth_bit_count_0, fifth_bit_count_1)
    let gamma_str = ""
    let epsilon_str = ""
    if (first_bit_count_0 > first_bit_count_1) {
        gamma_str = gamma_str.concat("0")
        epsilon_str = epsilon_str.concat("1")
    } else {
        gamma_str = gamma_str.concat("1")
        epsilon_str = epsilon_str.concat("0")
    }
    if (second_bit_count_0 > second_bit_count_1) {
        gamma_str = gamma_str.concat("0")
        epsilon_str = epsilon_str.concat("1")
    } else {
        gamma_str = gamma_str.concat("1")
        epsilon_str = epsilon_str.concat("0")
    }
    if (third_bit_count_0 > third_bit_count_1) {
        gamma_str = gamma_str.concat("0")
        epsilon_str = epsilon_str.concat("1")
    } else {
        gamma_str = gamma_str.concat("1")
        epsilon_str = epsilon_str.concat("0")
    }
    if (fouth_bit_count_0 > fouth_bit_count_1) {
        gamma_str = gamma_str.concat("0")
        epsilon_str = epsilon_str.concat("1")
    } else {
        gamma_str = gamma_str.concat("1")
        epsilon_str = epsilon_str.concat("0")
    }
    if (fifth_bit_count_0 > fifth_bit_count_1) {
        gamma_str = gamma_str.concat("0")
        epsilon_str = epsilon_str.concat("1")
    } else {
        gamma_str = gamma_str.concat("1")
        epsilon_str = epsilon_str.concat("0")
    }
    console.log(gamma_str)
    console.log(epsilon_str)
    return [gamma_str, epsilon_str]
}

const a = gamma_rate(new_str_list)
console.log(a)
console.log(typeof a)