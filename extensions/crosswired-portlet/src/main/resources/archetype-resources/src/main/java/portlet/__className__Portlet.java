package ${package}.portlet;

import com.khalibre.frontend.CwMVCPortlet;
import javax.portlet.Portlet;
import org.osgi.service.component.annotations.Component;

/**
 * @author Khalibre
 */
@Component(immediate = true, service = Portlet.class, property = {
	"com.liferay.portlet.display-category=category.cw",
	"javax.portlet.display-name=${className}",
	"com.liferay.portlet.instanceable=false",
	"javax.portlet.version=3.0",
	"javax.portlet.name=" + ${className}Portlet.PORTLET_KEY,
	"javax.portlet.security-role-ref=power-user,user"
})
public class ${className}Portlet extends CwMVCPortlet {

	public static final String PORTLET_KEY = "${className}Portlet";
}
