

def ispalindrome(word):
    iword = []
    for n in word:
        if not n.isspace():
            if n.isalnum():
                iword.append(n.lower())
    if iword == list(reversed(iword)):
        return True
    else:
        return False

#test

test = ispalindrome('five|\_/|four')

print(test)
