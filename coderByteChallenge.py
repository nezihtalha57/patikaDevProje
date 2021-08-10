def DifferentCases(strParam):
    strParam = strParam.replace("*", " ")
    strParam = strParam.replace("-", " ")
    strParam = strParam.replace("%", " ")
    strParam.replace("", "")
    strParam = strParam.lower()
    strParam = strParam.title()

    # code goes here
    return strParam


# keep this function call here
print(DifferentCases(input()))