interface Tab {
    id: string;
    label: string;
}

interface TabNavigationProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
}

const TabNavigation = ({ tabs, activeTab, onTabChange }: TabNavigationProps) => {
    return (
        <div className="flex justify-center space-x-8 mb-12">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`px-4 py-2 text-lg font-medium transition-all duration-300 relative
              ${activeTab === tab.id ? 'text-yellow-500' : 'text-gray-600 hover:text-gray-900'}`}
                >
                    {tab.label}
                    {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded-full" />
                    )}
                </button>
            ))}
        </div>
    );
}

export default TabNavigation;