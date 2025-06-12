word = input()  # вводим слово
reverse_word = ''
for i in range(len(word) - 1, -1, -1):
    reverse_word += word[i]  # добавляем каждый символ слова в обратном порядке
print(reverse_word)  # выводим перевернутое слово