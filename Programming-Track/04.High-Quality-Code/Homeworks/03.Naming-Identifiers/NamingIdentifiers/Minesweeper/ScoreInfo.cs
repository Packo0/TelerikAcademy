namespace Minesweeper
{
   public class ScoreInfo
    {
        private string name;
        private int points;

        public ScoreInfo()
        {
        }

        public ScoreInfo(string name, int points)
        {
            this.name = name;
            this.points = points;
        }

        public string Name
        {
            get
            {
                return this.name;
            }

            set
            {
                this.name = value;
            }
        }

        public int Score
        {
            get
            {
                return this.points;
            }

            set
            {
                this.points = value;
            }
        }
    }
}
