# def con(radian,pi = 3.14):
#     return radian*(180/pi)
    
# rad = float(input("enter radian: "))
# print("degrees = %.2f" % con(rad))

# def con2(deg, pi = 3.14):
#     return deg*(pi/180)

# deg = float(input("enter degree: "))
# print("radian = %.2f " % con2(deg))


#
#Main function



from multiprocessing import set_forkserver_preload

#
class Program:
    kennel = 0
    def __init__(self, campus):
        self.campus = campus
        Program.kennel +=1
    def __str__(self):
        return self.campus + " says: Hello!"

class BSIT(Program):
    def __str__(self):
        return super().__str__() + "Choose IT! We can make IT happen!"

class BSCS(Program):
    def __str__(self):
        return super().__str__() + "CS rocks the world! Choose CS!"

pamp = BSIT("Juan")
qc = BSCS("Maria")

print(qc)