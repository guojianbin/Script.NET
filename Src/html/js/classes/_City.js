/*******************************************\
  ��Ϸ��ʡ�������˵���(2006-06-20)
  This JavaScript was writen by Dron.
  @2003-2008 Ucren.com All rights reserved.
\*******************************************/
DronFw.Class.City = function (obj1,obj2)
{
	var country = document.getElementById(obj1);
	var city = document.getElementById(obj2);
	var countryData = "�㶫|����|����|����|����|���|����|����|����|�ӱ�|ɽ��|ɽ��|������|����|�Ϻ�|����|�ຣ|�½�|����|����|�Ĵ�|����|����|���ɹ�|����|����|����|����|����|�㽭|����|̨��|���|����|����".split("|");
	var cityData = [
		"��ѡ��".split("|"),
		"����|����|�麣|�ع�|����|��ͷ|����|տ��|��ɽ|�»�|��Դ|����|����|�Ϻ�".split("|"),
		"����|����|����|����|��ɽ|ƾ��|����|����".split("|"),
		"����".split("|"),
		"����|����|����|����|ͨʲ".split("|"),
		"����|����|Ȫ��|����|��ƽ|����|����|����|����|����ɽ|����|ʯʨ".split("|"),
		"���".split("|"),
		"��ɳ|����|����|��̶|����|����|����|����|����|����|����|�żҽ�".split("|"),
		"�人|��ʯ|��ɳ|ʮ��|�差|�˲�|����|�Ƹ�|����|����|�Ϻӿ�".split("|"),
		"֣��|����|����|����|ƽ��ɽ|�ױ�|����|����|����|���|����|���|����Ͽ|����|����|פ����|�ܿ�".split("|"),
		"ʯ��ׯ|��ɽ|����|�ػʵ�|��̨|����|�żҿ�|�е�|����|����|�ȷ�|����|��|��ˮ".split("|"),
		"����|�ൺ|�Ͳ�|��̨|����|����|̩��|Ϋ��|��Ӫ|��ׯ|����|�ĳ�|����|����|����|����|����|����|��ī|�ٳ�|�޳�|��ɽ|̩��".split("|"),
		"̫ԭ|�ٷ�|��ͬ|��Ȫ|����|����|����|�ܴ�|����|�˳�|˷��|���|����|ƽң|����".split("|"),
		"������|����|��ľ˹|ĵ����|�������|����|�绯|�ں�|�����|��Һ�".split("|"),
		"����|����|����|����|�̽�|��ɽ|��˳|��Ϫ|Ӫ��|����|����|����|����|��«��|����|�˳�".split("|"),
		"�Ϻ�".split("|"),
		"����|������|���|����|��ˮ|����|�ػ�|����|��Ҵ|ƽ��|����|��Ȫ|����".split("|"),
		"����|�����|���ľ|ǡ��ǡ|��Դ|ͬ��".split("|"),
		"��³ľ��|��������|��³��|ʯ����|����̩|������|�����|��ͼʲ|����|����|��Ȫ|����|��ʲ|����|����|����|����|����|��ɽ".split("|"),
		"����|�տ���|��֥|����|����|�޲��ֿ�".split("|"),
		"����|ʯ��ɽ|����|��ͭϿ|��ԭ".split("|"),
		"�ɶ�|����|��֦��|�Թ�|����|��ɽ|�˱�|�ﴨ|����|����|�ϳ�|����|����|�Ű�|��Ԫ|������|����|����|����".split("|"),
		"����|����|����|����|��Զ|����|����|��|��ͨ|��Ϫ|����|����|��ɽ|˼é|����|����|��ˮ".split("|"),
		"����|����|��Դ|��ƽ|ͨ��|�׳�|��ɽ|����|����|ͼ��|�Ӽ�".split("|"),
		"���ͺ���|��ͷ|�ں�|���|��ʤ|��������|������|ͨ��|���ֺ���|����".split("|"),
		"����|ͭ��|����|����|μ��|����|�Ӱ�|����|����|����|����|����|��ƽ".split("|"),
		"�Ϸ�|����|����|����ɽ|��ɽ|����|����|ͭ��|�ߺ�|����|����|����|����|���|����|����|����|����|�쳤|����".split("|"),
		"����|��˳|����ˮ|����|����|����|ͭ��|����|����|�Ͻ�|��ˮ|�ʻ�|��Զ".split("|"),
		"�Ͼ�|����|���Ƹ�|����|����|����|����|����|��ͨ|���|̩��|ͨ��|����|����|��|����|��̨|̫��".split("|"),
		"����".split("|"),
		"����|����|����|����|��|����|����|��Ϫ|�|����|��Ϫ|��ˮ|�ٺ�|��|����|��ɽ|��Ҧ|��ɽ|����|�ٰ�|ƽ��|����|̨��".split("|"),
		"�ϲ�|������|Ƽ��|�Ž�|����|����|����|�ٴ�|���|����".split("|"),
		"̨��|����|̨��|̨��|��¡|����".split("|"),
		"���|����|�½�".split("|"),
		"����".split("|"),
		"����|����|����|ŷ��|����|������".split("|")
	];
	this.init = function ()
	{
		//����ʡ
		country.length = 0;
		var opt = document.createElement("option");opt.innerHTML = opt.value = "��ѡ��";
		country.appendChild(opt);
		for(var i=0;i<countryData.length;i++)
		{
			var opt = document.createElement("option");opt.innerHTML = opt.value = countryData[i];
			country.appendChild(opt);
		}
		country.selectedIndex = 0;
		//������
		city.length = 0;
		var opt = document.createElement("option");opt.innerHTML = opt.value = "��ѡ��";
		city.appendChild(opt);
		city.selectedIndex = 0;
		//�ı�ʡ
		country.onchange = function ()
		{
			var getCity = cityData[this.selectedIndex];
			city.length = 0;
			for(var i=0;i<getCity.length;i++)
			{
				var opt = document.createElement("option");
				opt.innerHTML = opt.value = getCity[i];
				city.appendChild(opt);
			}
			if(getCity.length!=1)
			{
				var opt = document.createElement("option");
				opt.innerHTML = opt.value = "����";
				city.appendChild(opt);
			}
			city.selectedIndex = 0;
		}
	}
	this.init();
}