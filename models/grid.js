
function grid (level, tab)
{
	this.level = level;
	this.tab = new Array();

	if(level == 1)
	{
		this.tab[0]  = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 1
		this.tab[1]  = new Array(2,1,1,2,1,1,1,2,1,2,2,2,2,2,2,2); // ligne 2
		this.tab[2]  = new Array(2,1,1,2,1,1,1,2,1,2,2,2,2,2,2,2); // ligne 3
		this.tab[3]  = new Array(2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2); // ligne 4
		this.tab[4]  = new Array(2,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1); // ligne 5
		this.tab[5]  = new Array(2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2); // ligne 6
		this.tab[6]  = new Array(1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1); // ligne 7
		this.tab[7]  = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 8
		this.tab[8]  = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 9
		this.tab[9]  = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 12
		this.tab[10] = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 11
		this.tab[11] = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 12
		this.tab[12] = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 13
		this.tab[13] = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 14
		this.tab[14] = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 15
		this.tab[15] = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 16
		//this.tab[16] = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 17
		//this.tab[17] = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 18
		//this.tab[18] = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 19
		//this.tab[19] = new Array(2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2); // ligne 22
	}
}
