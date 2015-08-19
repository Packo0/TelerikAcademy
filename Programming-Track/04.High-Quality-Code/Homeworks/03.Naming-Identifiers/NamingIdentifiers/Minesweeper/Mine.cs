namespace Minesweeper
{
    using System;
    using System.Collections.Generic;

    public class Mine
    {
        private const byte NumberOfMines = 15;
        private const byte FieldsWithoutMines = 35;

        public static void Main()
        {
            string command = string.Empty;
            char[,] field = CreateGameField();
            char[,] mines = GenerateMines();
            int playerScorePoints = 0;
            bool isOverMine = false;
            List<ScoreInfo> playersScores = new List<ScoreInfo>(6);
            int row = 0;
            int col = 0;
            bool isAtStartOfTheGame = true;
            bool wonTheGame = false;

            do
            {
                if (isAtStartOfTheGame)
                {
                    Console.WriteLine("Let`s play Minesweeper. Try your luck to find the cells without mines." +
                    " The command 'top' shows HighScores, the command 'restart' restarts the game, the command 'exit' quits the game!");
                    PrintGameField(field);
                    isAtStartOfTheGame = false;
                }

                Console.Write("Please enter row and col (row col): ");
                command = Console.ReadLine().Trim();

                if (command.Length >= 3)
                {
                    if (int.TryParse(command[0].ToString(), out row) &&
                    int.TryParse(command[2].ToString(), out col) &&
                        row <= field.GetLength(0) && col <= field.GetLength(1))
                    {
                        command = "turn";
                    }
                }

                switch (command)
                {
                    case "top":
                        ShowHighScore(playersScores);
                        break;
                    case "restart":
                        field = CreateGameField();
                        mines = GenerateMines();
                        PrintGameField(field);
                        isOverMine = false;
                        isAtStartOfTheGame = false;
                        break;
                    case "exit":
                        Console.WriteLine("Bye, Bye, Bye!");
                        break;
                    case "turn":
                        if (mines[row, col] != '*')
                        {
                            if (mines[row, col] == '-')
                            {
                                ShowFieldValue(field, mines, row, col);
                                playerScorePoints++;
                            }

                            if (FieldsWithoutMines == playerScorePoints)
                            {
                                wonTheGame = true;
                            }
                            else
                            {
                                PrintGameField(field);
                            }
                        }
                        else
                        {
                            isOverMine = true;
                        }

                        break;
                    default:
                        Console.WriteLine("\nWrong Command! Please try again!\n");
                        break;
                }

                if (isOverMine)
                {
                    PrintGameField(mines);
                    Console.Write("\nHrrrrrr! Game Over with {0} points. Please, enter your name: ", playerScorePoints);
                    string nickName = Console.ReadLine();
                    ScoreInfo t = new ScoreInfo(nickName, playerScorePoints);
                    if (playersScores.Count < 5)
                    {
                        playersScores.Add(t);
                    }
                    else
                    {
                        for (int i = 0; i < playersScores.Count; i++)
                        {
                            if (playersScores[i].Score < t.Score)
                            {
                                playersScores.Insert(i, t);
                                playersScores.RemoveAt(playersScores.Count - 1);
                                break;
                            }
                        }
                    }

                    playersScores.Sort((ScoreInfo r1, ScoreInfo r2) => r2.Name.CompareTo(r1.Name));
                    playersScores.Sort((ScoreInfo r1, ScoreInfo r2) => r2.Score.CompareTo(r1.Score));
                    ShowHighScore(playersScores);

                    field = CreateGameField();
                    mines = GenerateMines();
                    playerScorePoints = 0;
                    isOverMine = false;
                    isAtStartOfTheGame = true;
                }

                if (wonTheGame)
                {
                    Console.WriteLine("\nCongrats! You have open 35 cells without mines.");
                    PrintGameField(mines);
                    Console.WriteLine("Please, enter your name: ");
                    string winner = Console.ReadLine();
                    ScoreInfo winnerScore = new ScoreInfo(winner, playerScorePoints);
                    playersScores.Add(winnerScore);
                    ShowHighScore(playersScores);
                    field = CreateGameField();
                    mines = GenerateMines();
                    playerScorePoints = 0;
                    wonTheGame = false;
                    isAtStartOfTheGame = true;
                }
            }
            while (command != "exit");

            Console.WriteLine("Made in Bulgaria!");
            Console.WriteLine("Byeeeeeeee.");
            Console.Read();
        }

        private static void ShowHighScore(List<ScoreInfo> playersScores)
        {
            Console.WriteLine("\nScores: ");
            if (playersScores.Count > 0)
            {
                for (int i = 0; i < playersScores.Count; i++)
                {
                    Console.WriteLine("{0}. {1} --> {2} cells opened", i + 1, playersScores[i].Name, playersScores[i].Score);
                }

                Console.WriteLine();
            }
            else
            {
                Console.WriteLine("Empty High Scores!\n");
            }
        }

        private static void ShowFieldValue(char[,] field, char[,] mines, int row, int col)
        {
            char numberOfMines = CountMines(mines, row, col);
            mines[row, col] = numberOfMines;
            field[row, col] = numberOfMines;
        }

        private static void PrintGameField(char[,] board)
        {
            int boardRowLength = board.GetLength(0);
            int boardColLength = board.GetLength(1);
            Console.WriteLine("\n    0 1 2 3 4 5 6 7 8 9");
            Console.WriteLine("   ---------------------");

            for (int row = 0; row < boardRowLength; row++)
            {
                Console.Write("{0} | ", row);
                for (int col = 0; col < boardColLength; col++)
                {
                    Console.Write(string.Format("{0} ", board[row, col]));
                }

                Console.Write("|");
                Console.WriteLine();
            }

            Console.WriteLine("   ---------------------\n");
        }

        private static char[,] CreateGameField()
        {
            int boardRows = 5;
            int boardColumns = 10;
            char[,] board = new char[boardRows, boardColumns];

            for (int row = 0; row < boardRows; row++)
            {
                for (int col = 0; col < boardColumns; col++)
                {
                    board[row, col] = '?';
                }
            }

            return board;
        }

        private static char[,] GenerateMines()
        {
            int rows = 5;
            int cols = 10;
            char[,] gameField = new char[rows, cols];

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    gameField[row, col] = '-';
                }
            }

            List<int> mines = new List<int>();
            Random randomGenerator = new Random();

            while (mines.Count < NumberOfMines)
            {
                int randomNumber = randomGenerator.Next(50);
                if (!mines.Contains(randomNumber))
                {
                    mines.Add(randomNumber);
                }
            }

            foreach (int mine in mines)
            {
                int row = mine % cols;
                int col = mine / cols;

                if (row == 0 && mine != 0)
                {
                    col--;
                    row = cols;
                }
                else
                {
                    row++;
                }

                gameField[col, row - 1] = '*';
            }

            return gameField;
        }

        private static void CalculateFieldValues(char[,] playField)
        {
            int rows = playField.GetLength(0);
            int cols = playField.GetLength(1);

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    if (playField[row, col] != '*')
                    {
                        char mineCount = CountMines(playField, row, col);
                        playField[row, col] = mineCount;
                    }
                }
            }
        }

        private static char CountMines(char[,] playField, int row, int col)
        {
            int mineCount = 0;
            int rows = playField.GetLength(0);
            int cols = playField.GetLength(1);
            char mineSymbol = '*';

            if (row - 1 >= 0)
            {
                if (playField[row - 1, col] == mineSymbol)
                {
                    mineCount++;
                }
            }

            if (row + 1 < rows)
            {
                if (playField[row + 1, col] == mineSymbol)
                {
                    mineCount++;
                }
            }

            if (col - 1 >= 0)
            {
                if (playField[row, col - 1] == mineSymbol)
                {
                    mineCount++;
                }
            }

            if (col + 1 < cols)
            {
                if (playField[row, col + 1] == mineSymbol)
                {
                    mineCount++;
                }
            }

            if ((row - 1 >= 0) && (col - 1 >= 0))
            {
                if (playField[row - 1, col - 1] == mineSymbol)
                {
                    mineCount++;
                }
            }

            if ((row - 1 >= 0) && (col + 1 < cols))
            {
                if (playField[row - 1, col + 1] == mineSymbol)
                {
                    mineCount++;
                }
            }

            if ((row + 1 < rows) && (col - 1 >= 0))
            {
                if (playField[row + 1, col - 1] == mineSymbol)
                {
                    mineCount++;
                }
            }

            if ((row + 1 < rows) && (col + 1 < cols))
            {
                if (playField[row + 1, col + 1] == mineSymbol)
                {
                    mineCount++;
                }
            }

            return char.Parse(mineCount.ToString());
        }
    }
}