import sqlite3

class Data_Handler():

	def __init__(self):
		self.filepath = "data.db"
		self.conn = sqlite3.connect(self.filepath)
		self.conn.text_factory = str
		self.d = self.conn.cursor()

	def add_user(self, name, email, password):
		self.d.execute("INSERT INTO name VALUES ({user_name}, {user_email}, {user_password}".format(user_name = name, user_email=email,user_password=password))
		print self.d.fetchall()
	
	def get_user(self,name):
		self.d.execute("SELECT * FROM login WHERE name=user_name".format(user_name=name))
		print self.d.fetchall()
	
	def add_profile(self, name, image, location):
		pass

	def add_classes(self, user_class, name):
		pass

	def get_classes(self, user_class, name):
		pass
	
	def get_profile(self, name):
		pass
