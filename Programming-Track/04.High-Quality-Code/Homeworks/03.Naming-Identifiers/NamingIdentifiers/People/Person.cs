namespace People
{
    public class Person
    {
        public Person()
        {
        }

        public Person(string name, int age, Gender gender)
        {
            this.Name = name;
            this.Age = age;
            this.Gender = gender;
        }

        public string Name { get; set; }

        public int Age { get; set; }

        public Gender Gender { get; set; }

        public void ConfigurePerson(int age)
        {
            this.Age = age;
            if (age % 2 == 0)
            {
                this.Name = "John";
                this.Gender = Gender.Male;
            }
            else
            {
                this.Name = "Joana";
                this.Gender = Gender.Female;
            }
        }

        public override string ToString()
        {
            return this.Name + " is " + this.Gender + " and is " + this.Age + " years-old";
        }
    }
}
