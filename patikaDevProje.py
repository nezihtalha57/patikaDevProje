# 1. ödev    Bir listeyi düzleştiren (flatten) fonksiyon yazın.
# Elemanları birden çok katmanlı listtlerden ([[3],2] gibi) oluşabileceği gibi, non-scalar verilerden de oluşabilir.
# input: [[1,'a',['cat'],2],[[[3]],'dog'],4,5]
# output: [1,'a','cat',2,3,'dog',4,5]

def flatting(l):
    l2 = []
    for item in l:
        if type(item) is list:
            for value in item:
                l2.append(value)
        else:
            l2.append(item)

    # çok katmanlı olduğunu kontrol edelim
    for item in l:
        if type(item) is list:
            return flatting(l2)

    return l2

l = [[1, 'a', ['cat'], 2], [[[3]], 'dog'], 4, 5]
print(flatting(l))


def reversedlist(reverselist):
    for i in range(len(reverselist)):
        if type(reverselist[i]) is list:
            hey = reverselist[i]
            hey = hey[::-1]
            reverselist[i] = hey
    return reverselist

l2 = [[1, 2], [3, 4], [5, 6, 7], 3,"dizininn ortası", 4, "nezih", "talha", "karakoç"]

reverselist = l2[::-1]

print(reversedlist(reverselist))

