// Navbar
var ContNavAdm = React.DOM.ul({ className: 'ContNavAdm nav navbar-nav' },
             React.DOM.li({ className: 'active' }, React.DOM.a(null, 'Расписание')),
             React.DOM.li(null, React.DOM.a(null, 'Профиль')),
             React.DOM.li(null, React.DOM.a(null, 'Мастера')),
             React.DOM.li(null, React.DOM.a(null, 'Акции')),
             React.DOM.li(null, React.DOM.a(null, 'Фото'))
           );
var ContNavMast = React.DOM.ul({ className: 'ContNavMast nav navbar-nav' },
             React.DOM.li({ className: 'active' }, React.DOM.a(null, 'Расписание')),
             React.DOM.li(null, React.DOM.a(null, 'Профиль')),
             React.DOM.li(null, React.DOM.a(null, 'Фото'))
           );

var Logo = React.DOM.a({ className: 'navbar-brand' });

var Icon = React.DOM.ul({ className: 'ContNavMast' },
             React.DOM.li(null, React.DOM.span({ className: 'glyphicon glyphicon-search' })),
             React.DOM.li(null, React.DOM.span({ className: 'glyphicon glyphicons-chat' })),
             React.DOM.li(null, React.DOM.span({ className: 'glyphicon glyphicons-bell' }))
           );

var Nav = React.DOM.nav({ className: 'collapse navbar-collapse navbar-inverse' }, Logo, ContNavAdm, Icon);



var LeftPanel = React.DOM.div({ className: 'LeftPanel' });
var Content = React.DOM.div({ className: 'Content' });

var app = React.DOM.div({ className: 'app' },Nav, LeftPanel, Content);

React.render(app, document.getElementById('app'));