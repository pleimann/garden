/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
	'@angular2-material': 'vendor/@angular2-material',
	'ng2-charts': 'vendor/ng2-charts',
	'chart-js': 'vendor/chart.js',

	/* ngrx/router begin */
	'@ngrx': 'vendor/@ngrx',
	'path-to-regexp': 'vendor/path-to-regexp',
	'isarray': 'vendor/isarray',
	'query-string': 'vendor/query-string',
	'strict-uri-encode': 'vendor/strict-uri-encode',
	'object-assign': 'vendor/object-assign'
	/* ngrx/router end */
};

/** User packages configuration. */
const packages: any = {
	'ng2-charts': {main: 'ng2-charts'},
	'chart-js': {main: 'dist/Chart.bundle.js'},

	/* ngrx/router begin */
	'@ngrx/core': {main: 'index'},
	'@ngrx/router': {main: 'index'},
	'path-to-regexp': {main: 'index'},
	'isarray': {main: 'index'},
	'query-string': {main: 'index'},
	'strict-uri-encode': {main: 'index'},
	'object-assign': {main: 'index'}
	/* ngrx/router end */
};

// put the names of any of your Material components here
const materialPkgs:string[] = [
	'core',
	'icon',
	'button',
	'card',
	'toolbar',
	'tabs',
	'list',
	'grid-list',
	'sidenav',
	'input',
];

materialPkgs.forEach((pkg) => {
	packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels:string[] = [
	// Angular specific barrels.
	'@angular/core',
	'@angular/common',
	'@angular/compiler',
	'@angular/http',
	'@angular/router',
	'@angular/platform-browser',
	'@angular/platform-browser-dynamic',

	// Thirdparty barrels.
	'rxjs',

	// App specific barrels.
	'app',
	'app/shared',
	'app/moisture',
	'app/mp-moisture',
	/** @cli-barrel */
];

const cliSystemConfigPackages:any = {};
barrels.forEach((barrelName:string) => {
	cliSystemConfigPackages[barrelName] = {main: 'index'};
});

/** Type declaration for ambient System. */
declare var System:any;

// Apply the CLI SystemJS configuration.
System.config({
	map: {
		'@angular': 'vendor/@angular',
		'rxjs': 'vendor/rxjs',
		'main': 'main.js'
	},
	packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({map, packages});
