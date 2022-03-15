
# import redshift_connector
import psycopg2


class DatabaseService:


    def execute_redshift_query(self, query):

        ENDPOINT,PORT,USER,PASSWORD,REGION,DBNAME = self.get_credentials("REDSHIFT")

        print("EXECUTING")

        with psycopg2.connect(
            host=ENDPOINT,
            port=PORT,
            user=USER,
            database=DBNAME,
            password=PASSWORD) as conn:
            with conn.cursor as cursor:
                print("INSIDE THE CURSOR")
                cursor.execute("select * from aisles;")
                print("111")
                answer = cursor.fetchall()
                print("@222")
                print(answer)




        print(ENDPOINT,PORT,USER,REGION,DBNAME)

    
    def execute_mysql_query(self, query):

        ENDPOINT,PORT,USER,PASSWORD,REGION,DBNAME = self.get_credentials("MYSQL")

        with psycopg2.connect(
            host=ENDPOINT,
            port=PORT,
            user=USER,
            database=DBNAME,
            password=PASSWORD) as conn:
            with conn.cursor as cursor:
                print("INSIDE THE CURSOR")
                cursor.execute("select * from aisles;")
                print("111")
                answer = cursor.fetchall()
                print("@222")
                print(answer)

        print(ENDPOINT,PORT,USER,REGION,DBNAME)


    @staticmethod
    def get_credentials(database):

        if database == "MYSQL":

            ENDPOINT="rutgersdatabase.c3evtogdubqe.us-east-1.rds.amazonaws.com"
            PORT=3306
            USER="RutgersDataBase"
            PASSWORD="Rutgers456"
            REGION="us-east-1a"
            DBNAME="Instacart"

            return ENDPOINT,PORT,USER,PASSWORD,REGION,DBNAME

        elif database == "REDSHIFT":
            ENDPOINT="rutgersdbmsproject.c3h5sc0bvfmu.us-east-1.redshift.amazonaws.com"
            PORT=5439
            USER="rutgersdatabase"
            PASSWORD="Rutgers456"
            REGION="us-east-1"
            DBNAME="instacart"
            return ENDPOINT,PORT,USER,PASSWORD,REGION,DBNAME

