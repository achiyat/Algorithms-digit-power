# 💻 Algorithms - Digit Power Sum

I invite you to visit my resume website:
[Click here](https://resume-achiya-tzuriel.netlify.app/)

The algorithm was tested and scored: ⭐⭐⭐⭐⭐

# 

Some numbers have interesting properties. For example:

- 89 --> 8¹ + 9² = 89 * 1
- 695 --> 6² + 9³ + 5⁴ = 1390 = 695 * 2
- 46288 --> 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given two positive integers `n` and `p`, we want to find a positive integer `k`, if it exists, such that the sum of the digits of `n` raised to consecutive powers starting from `p` is equal to `k * n`.

In other words, writing the consecutive digits of `n` as `a, b, c, d, ...`, is there an integer `k` such that:

```bash
(a^p + b^(p+1) + c^(p+2) + d^(p+3) + ...) = n * k
```

If it is the case we will return `k`, if not return -1.

Note: n and p will always be strictly positive integers.

# 🔍 For Example:
```bash
n = 89, p = 1 // should return 1 ---> since 8¹ + 9² = 89 = 89 * 1
n = 92, p = 1 // should return -1 ---> since there is no k such that 9¹ + 2² equals 92 * k
n = 695, p = 2 // should return 2 ---> since 6² + 9³ + 5⁴ = 1390 = 695 * 2
n = 46288, p = 3 // should return 51 ---> since 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
```

## 📥 Installation
To use the Morse code decoder, simply clone this repository and include the function in your project.

```bash
git clone https://github.com/achiyat/Algorithms-digit-power.git
```

## 📞 Contact

📧 **Email:** [achiya308@gmail.com](mailto:achiya308@gmail.com)

🔗 **LinkedIn:** [Achiya Tzuriel](https://www.linkedin.com/in/achiya-tzuriel/)

🔗 **Personal website Link:** [Personal website](https://resume-achiya-tzuriel.netlify.app/)

🔗 Project Link: [algorithms digit power](https://github.com/achiyat/Algorithms-digit-power)

Thanks for visiting my GitHub profile! 😊

**Achiya Tzuriel**
