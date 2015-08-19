namespace People
{
    using System;
    public class People
    {
        public static void Main()
        {
            var personMale = new Person("Ivan", 54, Gender.Male);
            var personFemale = new Person("Maria", 18, Gender.Female);
            var person = new Person();

            person.ConfigurePerson(34);

            Console.WriteLine(person);
            Console.WriteLine(personFemale);
            Console.WriteLine(personMale);
        }
    }
}