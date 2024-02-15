package ${package}.portlet.resource;

import ${package}.portlet.${className}Portlet;
import com.khalibre.frontend.CwResourceCommand;
import com.khalibre.frontend.request.CwRequest;
import com.khalibre.frontend.response.CwJsonResponse;
import com.khalibre.frontend.response.CwResponse;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.util.KeyValuePair;
import java.io.IOException;
import javax.portlet.PortletException;
import lombok.extern.slf4j.Slf4j;
import org.osgi.service.component.annotations.Component;

@Slf4j
@Component(immediate = true, service = MVCResourceCommand.class, property = {
    "javax.portlet.name=" + CwATestingPortlet.PORTLET_KEY,
    "mvc.command.name=/test/resource"
})
public class TestMVCResourceCommand extends CwResourceCommand {

  @Override
  protected CwResponse executeCommand(CwRequest request)
      throws PortletException, IOException, PortalException {
    KeyValuePair param = request.mapParameter(KeyValuePair.class);
    // ModelClass payload = request.getPayload(ModelClass.class);
    log.info("Param: {}", String.join(", ", param.getKey(), param.getValue()));
    return new CwJsonResponse((Object) "Nice Response!!");
  }
}
