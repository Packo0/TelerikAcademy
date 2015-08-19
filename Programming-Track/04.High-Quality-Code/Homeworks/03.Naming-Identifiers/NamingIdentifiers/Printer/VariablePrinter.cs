namespace Printer
{
    using System;

    public class VariablePrinter
    {
        public void PrintValue(bool value)
        {
            string valueAsString = value.ToString();
            Console.WriteLine(valueAsString);
        }
    }
}
