const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Rotate,
		C3.Behaviors.Platform,
		C3.Behaviors.TileMovement,
		C3.Plugins.Touch,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.TileMovement.Acts.SimulateControl,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.ScrollToObject,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar
	];
};
self.C3_JsPropNameTable = [
	{Поворот: 0},
	{круг: 0},
	{частьКруга: 0},
	{Платформер: 0},
	{мяч: 0},
	{ДвижениеПоКлеткам: 0},
	{прокрутка: 0},
	{тач: 0},
	{прокруткаY: 0},
	{новый_объект: 0}
];

self.InstanceType = {
	круг: class extends self.ISpriteInstance {},
	частьКруга: class extends self.ISpriteInstance {},
	мяч: class extends self.ISpriteInstance {},
	прокрутка: class extends self.ISpriteInstance {},
	тач: class extends self.IInstance {}
}